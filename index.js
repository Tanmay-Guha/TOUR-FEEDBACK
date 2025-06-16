const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Add this for form data

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Database configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "feedback_db",
  password: "tanmay",
  port: 5432,
});

// Admin credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";
let authenticatedUsers = {};

// Feedback submission endpoint
app.post("/submit", async (req, res) => {
  const { fullName, email, phone, package, rating, comments } = req.body;

  try {
    await pool.query(
      `INSERT INTO feedback (full_name, email, phone, package, rating, comments)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [fullName, email, phone || null, package, rating, comments || null]
    );
    res.status(200).send("Feedback stored successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

// Admin routes
app.get('/admin/login', (req, res) => {
  res.render('login', { error: null });
});

app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.render('login', { error: 'Username and password are required' });
  }

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const authToken = Math.random().toString(36).substring(2, 15);
    authenticatedUsers[authToken] = true;
    res.redirect(`/admin/dashboard?auth=${authToken}`);
  } else {
    res.render('login', { error: 'Invalid credentials' });
  }
});

// Auth middleware
const requireAuth = (req, res, next) => {
  const authToken = req.query.auth;
  
  if (authToken && authenticatedUsers[authToken]) {
    return next();
  }
  res.redirect('/admin/login');
};

// Dashboard route
app.get('/admin/dashboard', requireAuth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM feedback ORDER BY submitted_at DESC');
    res.render('dashboard', { 
      feedbacks: result.rows,
      authToken: req.query.auth
    });
  } catch (err) {
    console.error(err);
    res.status(500).render('login', { error: 'Database error' });
  }
});

// Logout route
app.get('/admin/logout', (req, res) => {
  const authToken = req.query.auth;
  if (authToken) {
    delete authenticatedUsers[authToken];
  }
  res.redirect('/admin/login');
});

// Serve static files
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Admin panel: http://localhost:${PORT}/admin/login`);
});
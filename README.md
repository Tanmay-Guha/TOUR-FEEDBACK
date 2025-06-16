# **Tour Feedback System with Admin Panel** ✨

A complete web application for collecting tour package feedback with a secure admin dashboard. Built with **Node.js, Express, PostgreSQL, and EJS**.

## **Features** 🌟
- **User-Friendly Feedback Form** (with validation)
- **Admin Dashboard** (view all submissions)
- **Secure Authentication** (username/password protected)
- **Responsive Design** (works on mobile/desktop)

---

## **Prerequisites** 📋
1. **Node.js** (v14+)
2. **PostgreSQL** (installed and running)
3. **Git** (optional)

---

## **Setup Instructions** 🛠️

### **1. Clone the Repository**
```bash
git clone https://github.com/TANMAY-GUHA/TOUR-FEEDBACK.git
cd TOUR-FEEDBACK
```

### **2. Install Dependencies**
```bash
npm install **OR** npm install express body-parser cors pg ejs
```

### **3. Start the Server**
```bash
node index.js
```
The server will run at:  
🌐 **Main Site**: [http://localhost:5000](http://localhost:5000)  
🔐 **Admin Panel**: [http://localhost:5000/admin/login](http://localhost:5000/admin/login)  

---

## **Usage Guide** 📖

### **1. Submit Feedback**
- Visit [http://localhost:5000](http://localhost:5000)
- Fill out the form and submit.

### **2. Access Admin Dashboard**
- Go to [http://localhost:5000/admin/login](http://localhost:5000/admin/login)
- **Default Credentials**:
  - **Username**: `admin`
  - **Password**: `admin123`
- View all feedback submissions in the dashboard.

### **3. Logout**
- Click **"Logout"** in the admin panel to return to the login page.

---

## **Project Structure** 📂
```
tour-feedback-system/
├── public/            # Static files (HTML, CSS, JS)
│   └── index.html     # Feedback form
├── views/             # EJS templates
│   ├── login.ejs      # Admin login page
│   └── dashboard.ejs  # Admin dashboard
├── index.js           # Backend server
├── package.json       # Dependencies need to install by step 2
└── README.md          # This file
```

---

## **License** 📜
MIT License - Free for personal and educational use.

---

## **Credits** 🙌
- Built with ❤️ by **TANMAY GUHA**
- **Tailwind CSS** for styling
- **Font Awesome** for icons

---

### **Enjoy using the Tour Feedback System!** 🚀  
For questions, open an issue or contact me.  

--- 

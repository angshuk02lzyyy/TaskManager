# 📝 Task Manager Web Application
A simple full-stack **Task Manager** web application built using **HTML, CSS, JavaScript, PHP**, and **MySQL**.
It allows users to:
- Add, update, delete, and mark tasks as completed.
- Store task data persistently using a MySQL database.
- Interact through a clean and responsive user interface.
---
## 🔧 Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Database**: MySQL
- **Hosting (optional)**: 000webhost (Free PHP hosting)
---
## 🚀 Features

- ✅ Add new tasks with title and description
- 📝 Edit and update existing tasks
- ❌ Delete tasks permanently
- ✔️ Mark tasks as completed / pending (toggle)
- 💾 Data stored persistently in MySQL database
- 🔄 Real-time UI update after every action (no page reload)
- 🛡️ XSS-safe input rendering via JavaScript escaping
- ⚠️ Input validation (title is required)

---
## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2. Start Local Server
- Install and open **XAMPP** or **WAMP**
- Place the project folder inside `htdocs/` (XAMPP) or `www/` (WAMP)

### 3. Import the Database
- Open `http://localhost/phpmyadmin`
- Click **Import** → choose `database.sql` → click **Go**

### 4. Configure Database Connection
Open `db.php` and update credentials if needed:
```php
$host = "localhost";
$user = "root";       // your MySQL username
$pass = "";           // your MySQL password
$db   = "task_manager";
```

### 5. Run the App
Open your browser and go to:
http://localhost/task-manager/


---

## 🔁 How It Works
User opens page      →  FETCH   →  loads all tasks from DB
User adds task       →  ADD     →  inserts into DB → FETCH
User clicks ✔        →  UPDATE  →  toggles completed in DB → FETCH
User clicks ✕        →  DELETE  →  removes from DB → FETCH


---

## 🌐 Deploy to 000webhost (Optional)

1. Sign up at [000webhost.com](https://www.000webhost.com)
2. Upload all files via **File Manager**
3. Create a MySQL database from the hosting dashboard
4. Update `db.php` with the hosted DB credentials
5. Import `database.sql` via phpMyAdmin on the host

---

## 👨‍💻 Author

**Angshuk Chakraborty**
- GitHub: angshuk02lzyyy
- Email: angshuk02@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).








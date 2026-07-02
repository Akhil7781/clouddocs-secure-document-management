# ☁️ Cloud Document Management System

A secure and responsive **MERN Stack** web application that enables users to upload, manage, search, download, and delete documents securely using JWT Authentication.

---

## 🚀 Features

- 🔐 User Registration & Login
- 🛡️ JWT Authentication
- 📤 Upload Documents
- 📥 Download Documents
- 🗑️ Delete Documents
- 🔍 Search Documents
- 📊 Dashboard Analytics
- 👤 User Profile
- 📱 Responsive Design
- 🔔 Toast Notifications
- 📁 File Type Validation
- 📏 File Size Validation

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- bcrypt.js

---

## 📂 Project Structure

```text
cloud-document-management
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── layouts
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
│
├── README.md
└── .gitignore
```

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/Akhil7781/cloud-document-management.git
```

### Go to Project Folder

```bash
cd cloud-document-management
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

Open another terminal

```bash
cd frontend
npm install
```

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/profile | User Profile |

### Documents

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/documents | Get All Documents |
| POST | /api/documents/upload | Upload Document |
| GET | /api/documents/download/:id | Download Document |
| DELETE | /api/documents/:id | Delete Document |
| GET | /api/documents/search | Search Documents |
| GET | /api/documents/dashboard | Dashboard Statistics |

---

## 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt.js
- Protected Routes
- Authorization Middleware
- File Type Validation
- File Size Validation

---

## 📸 Screenshots

Create a folder named **screenshots** in the project root and add these images.

```text
screenshots/
│
├── login.png
├── register.png
├── dashboard.png
├── documents.png
├── upload.png
└── profile.png
```

Then display them like this:

```md
## Login

![Login](screenshots/login.png)

## Dashboard

![Dashboard](screenshots/dashboard.png)

## Documents

![Documents](screenshots/documents.png)

## Upload

![Upload](screenshots/upload.png)

## Profile

![Profile](screenshots/profile.png)
```

---

## 📈 Future Enhancements

- AWS S3 Cloud Storage
- File Sharing
- Document Preview
- Version History
- Role-Based Access Control
- Email Notifications
- Dark Mode
- Drag & Drop Upload

---

## 🎯 Learning Outcomes

This project helped in understanding:

- React Hooks
- Context API
- React Router
- REST APIs
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Multer File Upload
- Protected Routes
- CRUD Operations
- Tailwind CSS
- Full Stack Application Development

---

## 👨‍💻 Author

**Akhil**

Final Year Computer Science Engineering Student

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

---

**Thank you for visiting this repository! 🚀**
# ☁️ Cloud Document Management System

A secure and responsive **MERN Stack** web application that allows users to upload, manage, search, download, and delete documents securely using **JWT Authentication**. The project is fully containerized using **Docker** and **Docker Compose** for easy deployment and consistent execution across different environments.

---

# 🚀 Features

- 🔐 User Registration & Login
- 🛡️ JWT Authentication
- 📤 Upload Documents
- 📥 Download Documents
- 🗑️ Delete Documents
- 🔍 Search Documents
- 📊 Dashboard Analytics
- 👤 User Profile
- 📱 Responsive User Interface
- 🔔 Toast Notifications
- 📁 File Type Validation
- 📏 File Size Validation
- 🐳 Docker Support
- ⚡ One-command startup using Docker Compose

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- bcrypt.js

## DevOps

- Docker
- Docker Compose

---

# 📂 Project Structure

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
│   ├── Dockerfile
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
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/cloud-document-management-system.git
```

## Move into the Project

```bash
cd cloud-document-management-system
```

## Install Backend Dependencies

```bash
cd backend
npm install
```

## Install Frontend Dependencies

Open another terminal.

```bash
cd frontend
npm install
```

## Run Backend

```bash
cd backend
npm run dev
```

## Run Frontend

```bash
cd frontend
npm run dev
```

---

# 🐳 Running with Docker

## Build Docker Images

```bash
docker compose build
```

## Start Containers

```bash
docker compose up
```

## Start in Background

```bash
docker compose up -d
```

## Stop Containers

```bash
docker compose down
```

---

# 🌐 Application URLs

| Service | URL |
|---------|------|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:5000 |

---

# ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/profile | Get User Profile |

## Documents

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/documents | Get All Documents |
| POST | /api/documents/upload | Upload Document |
| GET | /api/documents/download/:id | Download Document |
| DELETE | /api/documents/:id | Delete Document |
| GET | /api/documents/search | Search Documents |
| GET | /api/documents/dashboard | Dashboard Statistics |

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt.js
- Protected Routes
- Authorization Middleware
- File Type Validation
- File Size Validation

---

# 📈 Future Enhancements

- AWS S3 Integration
- File Preview
- File Sharing
- Role-Based Access Control
- Version History
- Email Notifications
- GitHub Actions CI/CD
- Kubernetes Deployment

---

# 📚 Learning Outcomes

This project helped in understanding:

- React Hooks
- Context API
- React Router
- Tailwind CSS
- REST APIs
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Multer File Upload
- CRUD Operations
- Protected Routes
- Docker
- Docker Compose
- Multi-container Application Development

---

# 👨‍💻 Author

**Akhil**

Final Year Computer Science Engineering Student

---

# ⭐ If you like this project

Please consider giving this repository a **Star ⭐**.

---

## 📜 License

This project is created for learning and educational purposes.

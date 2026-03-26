# 📍 Location Tracker App
📱 A React Native (Expo) and Node.js (Express) application built to master location tracking and advanced authentication.

## ❓ What is This?

🚀 This is a full-stack project designed to understand the lifecycle of a location tracking app. It includes a powerful **Express** backend, **MongoDB** cloud storage, and an **Expo** client application. 🎯 The goal is to build a secure, real-time tracking system while learning key backend concepts.

## 📚 What I Learned

### 🟢 Express.js (Backend Foundations)

🚀 **Server Setup** — Initializing a robust server environment with Express.

🛤️ **Routing** — Creating endpoints to handle incoming requests (e.g., getting a "Hi there!" response).

🔌 **Middlewares** — Using packages like `express` to parse data and manage traffic.

### 🍃 MongoDB & Mongoose (Cloud Data)

☁️ **MongoDB Atlas** — Connecting to a cloud-hosted database for persistent storage.

📦 **Mongoose Integration** — Using an ODM to simplify interactions with the database.

🛠️ **Connection Handlers** — Setting up real-time event listeners for "connected" and "error" states to monitor database health.

### 🔐 Security & Dev Tools (Preview)

🎫 **JWT & Auth** — (In progress) Preparing the architecture for secure JSON Web Token authentication.

🔄 **Nodemon** — Automating the development flow by auto-restarting the server on every file save.

## 🗂 Project Structure

```text
location-tracker/
 ├── tracker-server/     → 💻 Express backend
 │    ├── index.js       → Server entry & DB connection
 │    └── package.json   → Backend scripts & dependencies
 ├── App.js              → 📱 Expo app main entry
 └── ...                 → Other frontend and backend folders (Coming Soon!)
```

## 🛠 Tech Stack

⚛ **React Native + Expo** (Frontend)

🚄 **Express.js** (Backend)

🍃 **MongoDB Atlas** (Database)

🔐 **JWT & Bcrypt** (Security - Planned)

🔄 **Nodemon** (Dev Tooling)

## ▶ How to Run

### 1. Backend (Server)
Go to the server folder:
```bash
cd tracker-server
```
Install dependencies:
```bash
npm install
```
Start development server:
```bash
npm run dev
```

### 2. Frontend (Expo)
Go to the root folder:
```bash
npm install
npx expo start
```

---
*✨ More features and folders are coming as we continue our learning journey!*

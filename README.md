# 🏦 Banking Ledger System

A robust backend application designed to simulate a real-world **banking ledger system**, enabling secure transaction management, account handling, and balance tracking with consistency and reliability.

---

## 📌 Overview

The **Banking Ledger System** is a backend-focused project that models how financial institutions maintain transaction records using a centralized ledger. It ensures accurate tracking of credits and debits while maintaining data integrity—an essential aspect of modern banking systems.

This project demonstrates strong understanding of backend development, API design, and financial transaction workflows.

---

## 🚀 Features

* 🔐 **User Authentication**

  * Secure user registration and login
  * JWT-based authentication

* 💳 **Account Management**

  * Create and manage user accounts
  * Unique account identification

* 💸 **Transaction Handling**

  * System-generated initial funds (simulating cash deposits)
  * Peer-to-peer money transfer between users
  * Transaction validation

* 📒 **Central Ledger**

  * All transactions are recorded in a centralized ledger
  * Ensures traceability and consistency

* 📊 **Balance Management**

  * Real-time balance calculation from ledger entries
  * Accurate tracking of user balances

* 🧾 **Transaction Tracking**

  * Complete history of all transactions
  * Transparent and auditable system

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ORM)
* **Authentication:** JSON Web Tokens (JWT)
* **Tools:** Postman, Git, GitHub

---

## 📁 Project Structure

```
BANKING-LEDGER-SYSTEM/
│
├── controllers/       # Business logic
├── models/            # Database schemas
├── routes/            # API route definitions
├── middlewares/       # Authentication & error handling
├── config/            # Database & environment configs
├── utils/             # Helper functions
├── .env               # Environment variables
├── app.js / server.js # Entry point
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Debjit1729/Banking-Ledger-System.git
cd Banking-Ledger-System
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server

```bash
npm start
```

Server will run on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | /api/auth/register | Register a user |
| POST   | /api/auth/login    | Login user      |

---

### 💰 Transactions & Ledger

| Method | Endpoint                               | Description                                                             |
| ------ | -------------------------------------- | ----------------------------------------------------------------------- |
| POST   | /api/transactions/system/initial-funds | System user creates initial balance for a user (simulates cash deposit) |
| POST   | /api/transactions                      | Transfer money between users                                            |
| GET    | /api/account                           | Get user balance                                                        |                           |

---

## 🔒 System Design Logic

* A **system user** is responsible for initializing funds for normal users.
* This replaces real-world **cash deposit functionality**.
* All transactions (including system funding and user transfers) are recorded in a **central ledger**.
* User balances are dynamically derived from ledger entries instead of being directly stored.
* Ensures:

  * Data consistency
  * Full traceability
  * Audit-friendly architecture

---

## 🔒 Security Features

* Password hashing using secure algorithms
* JWT-based route protection
* Input validation and error handling
* Prevention of invalid transactions (e.g., insufficient balance)

---

## 🧠 Key Concepts Implemented

* RESTful API architecture
* Ledger-based financial system design
* Middleware-based request handling
* Data consistency in financial transactions
* Modular and scalable backend structure

---

## 📈 Future Enhancements

* Double-entry accounting system
* Transaction rollback mechanism
* Rate limiting & API security improvements
* Admin dashboard for monitoring
* Fraud detection system (rule-based / ML-based)

---

## ⭐ Acknowledgment

This project was built as part of backend development practice to understand real-world financial systems and strengthen system design concepts.

---

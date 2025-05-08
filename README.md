# Arami Backend

Arami is a backend service for an online beauty marketplace platform built with **Express.js** and **TypeScript**. It supports a multi-vendor system where vendors can post products and buyers can purchase using a wallet system. It also features a **three-level admin system** for effective moderation and control.

## 🧰 Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB / PostgreSQL
- JWT Authentication
- Role-Based Access Control
- Docker (optional)

## 🧑‍💻 User Roles

### 1. **Buyers**

- Browse and purchase beauty products
- Fund wallet
- View transaction history

### 2. **Vendors**

- Create and manage products
- View buyer orders
- Receive payment after confirmation

### 3. **Admins**

#### 🟡 Low-Level Admin

- Approve or suspend users and vendors
- Monitor transactions and platform analytics
- Flag or remove inappropriate products
- Actions require approval from Mid or Senior Admin

#### 🟠 Mid-Level Admin

- All privileges of low-level admin
- Approve low-level admin actions
- Manage low-level admin accounts (create, suspend, delete)

#### 🔴 Senior-Level Admin

- Full system control
- Manage Mid- and Low-Level Admins
- Access complete platform analytics
- Override and finalize all actions

## 📂 Project Structure

See the folder structure in this README above.

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/arami-backend.git
cd arami-backend
```

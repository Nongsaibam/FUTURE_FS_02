# 🚀 Mini CRM Backend (Pro Version)

## Features
- 🔐 JWT Authentication (Login/Register)
- 👤 User Management
- 📊 Lead Management (CRUD)
- 📝 Notes Tracking
- 🔒 Protected Routes
- ⚡ REST API

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Auth
- bcryptjs

## Setup

### 1. Install dependencies
npm install

### 2. Create .env file
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

### 3. Run server
node server.js

## API Routes

### Auth
POST /api/auth/register
POST /api/auth/login

### Leads
GET /api/leads
GET /api/leads/:id
POST /api/leads
PUT /api/leads/:id
DELETE /api/leads/:id
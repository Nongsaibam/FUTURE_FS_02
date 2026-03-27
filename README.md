# Mini CRM

A simple Customer Relationship Management (CRM) application for managing leads and customer interactions. This project consists of a backend API built with Node.js and Express, and a frontend built with React and Vite.

## Features

- 🔐 User Authentication (Register/Login with JWT)
- 👤 User Management
- 📊 Lead Management (Create, Read, Update, Delete)
- 📝 Notes Tracking for Leads
- 🔒 Protected Routes
- 📈 Dashboard with Lead Statistics
- ⚡ RESTful API
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Recharts** - Chart library
- **Lucide React** - Icon library

## Project Structure

```
mini-crm/
├── Backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   └── leadController.js     # Lead management logic
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT authentication middleware
│   ├── models/
│   │   ├── Lead.js               # Lead data model
│   │   └── User.js               # User data model
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication routes
│   │   └── leadRoutes.js         # Lead routes
│   ├── server.js                 # Main server file
│   ├── package.json
│   └── README.md
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── LeadCard.jsx       # Lead card component
    │   │   ├── LeadTable.jsx      # Leads table component
    │   │   ├── Navbar.jsx         # Navigation bar
    │   │   ├── NotesPanel.jsx     # Notes panel for leads
    │   │   ├── Sidebar.jsx        # Sidebar navigation
    │   │   └── StatusBadge.jsx    # Status badge component
    │   ├── context/
    │   │   └── AuthContext.jsx    # Authentication context
    │   ├── hooks/
    │   │   └── useLeads.js        # Custom hook for leads
    │   ├── pages/
    │   │   ├── Dashboard.jsx      # Dashboard page
    │   │   ├── LeadDetails.jsx    # Lead details page
    │   │   ├── Leads.jsx          # Leads list page
    │   │   └── Login.jsx          # Login page
    │   ├── services/
    │   │   └── api.js             # API service functions
    │   ├── App.jsx                # Main app component
    │   ├── main.jsx               # App entry point
    │   ├── index.css              # Global styles
    │   └── App.css                # App-specific styles
    ├── vite.config.js
    ├── package.json
    ├── README.md
    └── index.html
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173` (default Vite port).

## Usage

1. Open your browser and go to `http://localhost:5173`
2. Register a new account or login with existing credentials
3. Access the dashboard to view lead statistics
4. Navigate to the Leads page to manage your leads
5. Create, view, update, or delete leads
6. Add notes to leads for tracking interactions

## API Documentation

### Authentication Endpoints

- **POST** `/api/auth/register`
  - Register a new user
  - Body: `{ "name": "string", "email": "string", "password": "string" }`

- **POST** `/api/auth/login`
  - Login user
  - Body: `{ "email": "string", "password": "string" }`
  - Returns: JWT token

### Lead Endpoints

All lead endpoints require authentication (JWT token in Authorization header).

- **GET** `/api/leads`
  - Get all leads for the authenticated user

- **GET** `/api/leads/:id`
  - Get a specific lead by ID

- **POST** `/api/leads`
  - Create a new lead
  - Body: `{ "name": "string", "email": "string", "status": "New|Contacted|Converted", "notes": ["string"] }`

- **PUT** `/api/leads/:id`
  - Update a lead
  - Body: `{ "name": "string", "email": "string", "status": "string", "notes": ["string"] }`

- **DELETE** `/api/leads/:id`
  - Delete a lead

## Data Models

### User
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Lead
```javascript
{
  name: String,
  email: String,
  status: String (enum: "New", "Contacted", "Converted"),
  notes: [String],
  createdBy: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Built with modern web technologies
- Inspired by real-world CRM systems
- Uses open-source libraries and frameworks</content>
<parameter name="filePath">/Future Interns/mini-crm/README.md
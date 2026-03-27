// Load ENV first
require("dotenv").config({ path: "./.env" });

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Debug check (remove later)
console.log("MONGO_URI:", process.env.MONGO_URI);

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/leads", require("./routes/leadRoutes"));

// Root Route
app.get("/", (req, res) => {
  res.send("Mini CRM API Running 🚀");
});

// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// Global Error Handler (Pro Feature 🔥)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
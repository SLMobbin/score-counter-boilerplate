const express = require("express");
require("dotenv").config({ path: "./config/.env" });

// Import PostgreSQL pool from services
const pool = require("./src/services/db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static("public")); // serves index.html, style.css, script.js

// Routes
const scoresRoutes = require("./src/routes/scores");
app.use("/api/scores", scoresRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Score Counter Boilerplate API is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

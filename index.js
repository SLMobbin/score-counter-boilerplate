const express = require("express");
const { Pool } = require("pg");
require("dotenv").config({ path: "./config/.env" });

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Example route
app.get("/api/scores", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM scores ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching scores:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Score Counter Boilerplate API is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

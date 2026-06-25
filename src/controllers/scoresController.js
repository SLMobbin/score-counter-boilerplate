const pool = require("../services/db");

exports.getScores = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM scores ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
};

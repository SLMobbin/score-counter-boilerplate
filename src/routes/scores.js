const express = require("express");
const router = express.Router();
const { getScores } = require("../controllers/scoresController");

router.get("/", getScores);

module.exports = router;

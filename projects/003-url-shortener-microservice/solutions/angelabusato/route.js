const express = require("express");
const router = express.Router();

router.post("/api/shorturl", (req, res) => {
  const url = req.body.url;
  res.json({ original_url: url, short_url: 1 });
});

module.exports = router;

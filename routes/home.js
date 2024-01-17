const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  res.redirect("https://userenrollment-vercel.vercel.app/.well-known/com.apple.remotemanagement");
  res.end();
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/characters", (req, res) => {
  res.json("route characters OK");
});

module.exports = router;

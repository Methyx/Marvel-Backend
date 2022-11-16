const express = require("express");
const router = express.Router();

router.get("/comics", (req, res) => {
  res.json("route comics OK");
});

module.exports = router;

const express = require("express");
const axios = require("axios");
const router = express.Router();

// ----------------------------------
// Route to get a list of characters
// ----------------------------------
// Query	  Info	                      Required
// limit	  between 1 and 100           No
// skip	    number of results to ignore	No
// name	    search a character by name	No

router.get("/characters", async (req, res) => {
  const { limit, skip, name } = req.query;
  // exclusions
  if (limit && (!Number(limit) || Number(limit) < 1 || Number(limit) > 100)) {
    return res.status(406).json({ message: "bad limit" });
  }
  if (skip && (isNaN(Number(skip)) || Number(skip) < 0)) {
    return res.status(406).json({ message: "bad skip" });
  }
  // requete à l'API MARVEL
  let url =
    "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=" +
    process.env.MARVEL_API_KEY;
  if (limit) {
    url += "&limit=" + limit;
  }
  if (skip) {
    url += "&skip=" + skip;
  }
  if (name) {
    url += "&name=" + name;
  }
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

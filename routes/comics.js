const express = require("express");
const router = express.Router();
const axios = require("axios");

// ----------------------------------------------------
// Get a list of comics containing a specific character
// ----------------------------------------------------
// Params	    Info	                Required
// characterId	characters mongoDB id	Yes

router.get("/comics/:id", async (req, res) => {
  const id = req.params.id;
  //   exclusions
  if (!id || id.length !== 24) {
    return res.status(406).json({ message: "bad id" });
  }
  // requete à l'API MARVEL
  let url = `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.MARVEL_API_KEY}`;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ------------------------------
// Route to get a list of comics
// ------------------------------
// Query	Info	                    Required
// limit	between 1 and 100	        No
// skip	    number of results to ignore	No
// title	search a comic by title	    No

router.get("/comics", async (req, res) => {
  const { limit, skip, title } = req.query;
  // exclusions
  if (limit && (!Number(limit) || Number(limit) < 1 || Number(limit) > 100)) {
    return res.status(406).json({ message: "bad limit" });
  }
  if (skip && (isNaN(Number(skip)) || Number(skip) < 0)) {
    return res.status(406).json({ message: "bad skip" });
  }
  // requete à l'API MARVEL
  let url =
    "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=" +
    process.env.MARVEL_API_KEY;
  if (limit) {
    url += "&limit=" + limit;
  }
  if (skip) {
    url += "&skip=" + skip;
  }
  if (title) {
    url += "&title=" + title;
  }
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

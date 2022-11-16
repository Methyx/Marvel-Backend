const express = require("express");
const axios = require("axios");
const router = express.Router();

// ----------------------------------------------
// Route to get the infos of a specific character
// ----------------------------------------------
// Params	      Info	                Required
// characterId	characters mongoDB id	Yes

router.get("/character/:id", async (req, res) => {
  const id = req.params.id;
  //   exclusions
  if (!id || id.length !== 24) {
    return res.status(406).json({ message: "bad id" });
  }
  // requete à l'API MARVEL
  let url = `https://lereacteur-marvel-api.herokuapp.com/character/${id}?apiKey=${process.env.MARVEL_API_KEY}`;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(require("./routes/characters"));
app.use(require("./routes/character"));
app.use(require("./routes/comics"));

app.all("*", (req, res) => {
  res.status(401).json({ message: "route not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Hello Phil, server is started !");
});

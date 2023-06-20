const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "test deploy di netlify yak, wkkwkwk",
  });
});

app.listen(5000, () => {
  console.log("server telah berjalan di localhost:5000");
});

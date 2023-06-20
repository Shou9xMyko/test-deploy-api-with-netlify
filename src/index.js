const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "test deploy di netlify yak, wkkwkwk",
  });
});

app.listen(5000, () => {
  console.log("server telah berjalan di localhost:5000");
});

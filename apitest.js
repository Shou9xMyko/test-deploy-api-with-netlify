const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "test deploy di netlify yak, wkkwkwk",
  });
});

app.listen(1234, () => {
  console.log("api telah berjalan di port 1234");
});

const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "test deploy di netlify yak, wkkwkwk",
  });
});

app.use("/api", router);

module.exports.handler - serverless(app);

const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const db = require("../database/index");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/:productId/:reviewId/", (req, res) => {
  // const name = req.query.name || "World";
  // res.setHeader("Content-Type", "application/json");
  // res.send(JSON.stringify({ greeting: `Hello ${name}!` }));

  const productId = req.params.productId;
  const reviewId = req.params.reviewId;
  db.saveFakeData();
  res.send(req.url);
});

app.listen(3001, () => console.log("Server is running on localhost:3001"));

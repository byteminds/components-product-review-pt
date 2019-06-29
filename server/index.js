const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const db = require("../database/index");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/:productId/", (req, res) => {
  const productId = req.params.productId;
  db.getReviews(productId, (err, reviews) => {
    if (err) throw `Server Error Retrieving Reviews for productId:${productId}`;
    res.send(reviews);
  });
  //res.send(req.url);
});

app.listen(3001, () => console.log("Server is running on localhost:3001"));

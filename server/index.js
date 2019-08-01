const express = require("express");
const db = require("../database/index");
const path = require("path");
// const cors = require("cors");

const app = express();

// app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(
  "/reviews/:productId",
  express.static(path.join(__dirname, "../client/dist"))
);

app.get("/reviews/api/:productId", (req, res) => {
  const productId = req.params.productId;
  console.log("PRODUCTID =====>>>>> ", productId);
  db.getReviews(productId, (err, reviews) => {
    if (err) throw `Server Error Retrieving Reviews for productId:${productId}`;
    res.send(reviews);
  });
});

app.get("/api/:productId/summary", (req, res) => {
  const productId = req.params.productId;
  db.getReviewSummary(productId, (err, reviews) => {
    if (err) throw `Server Error Retrieving Reviews for productId:${productId}`;
    res.send(reviews);
  });
});

app.listen(3001, () => console.log("Server is running on localhost"));

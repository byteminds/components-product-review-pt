import fakedata from "./fakedata";
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher");

let reviewSchema = mongoose.Schema({
  reviewId: { type: Number, unique: true, required: true },
  reviewerHandle: String,
  reviewDate: { type: Date, default: Date.now },
  reviewTitle: String,
  reviewPara: String,
  rating: Number,
  productId: Number,
  verifiedPurchase: Boolean
});

let Reviews = mongoose.model("Reviews", reviewSchema);

let save = reviews => {
  // This function saves a review or reviews to MongoDB
  const newReviews = new Reviews(reviews);
  newReviews.save(err => {
    if (err) console.log("ERROR SAVING TO MONGODB => ", err);
    console.log("SUCCESSFUL SAVE");
  });
};

let saveFakeData = () => {
  var reviewsDataSet = fakedata.genFakeReviews(100);
  reviewsDataSet.save(reviewsDataSet);
};

module.exports.save = save;
module.exports.saveFakeData = saveFakeData;

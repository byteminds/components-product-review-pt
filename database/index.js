const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/reviewdb", { useNewUrlParser: true }).catch(error => console.log(error));

let reviewSchema = mongoose.Schema({
  reviewId: { type: Number, unique: true },
  reviewerHandle: String,
  reviewDate: { type: Date, default: Date.now },
  reviewTitle: String,
  reviewPara: String,
  rating: Number,
  productId: Number,
  verifiedPurchase: Boolean
});

let Reviews = mongoose.model("Reviews", reviewSchema);

let getReviews = (productId, callback) => {
  console.log("GET REVIEW ID", productId);
  Reviews.find({ productId: productId })
    .sort({ reviewDate: -1 })
    .exec((err, data) => {
      if (err) throw err;
      //console.log("DATA: ", data);
      callback(err, data);
    });
};

let getReviewSummary = (productId, callback) => {
  var tmp = 0;
  var avg = 0;
  Reviews.find({ productId: productId })
    .sort({ reviewDate: -1 })
    .exec((err, data) => {
      if (err) throw err;
      //console.log("DATA: ", data);
      data.forEach(review => {
        tmp += review.rating;
      });
      avg = tmp / data.length;
      callback(err, {
        productId: productId,
        avgRating: avg,
        totalReviews: data.length
      });
    });
};

module.exports = { getReviews, getReviewSummary };

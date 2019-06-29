const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/reviewdb", { useNewUrlParser: true });

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
  Reviews.find({ productId: productId })
    .sort({ reviewDate: -1 })
    .exec((err, data) => {
      if (err) throw err;
      //console.log("DATA: ", data);
      callback(err, data);
    });
};

// module.exports.save = save;
module.exports = { getReviews };

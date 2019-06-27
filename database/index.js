const fakedata = require("./fakedata");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/reviewdb", { useNewUrlParser: true });

let reviewSchema = mongoose.Schema({
  review: {
    reviewId: Number,
    reviewerHandle: String,
    reviewDate: { type: Date, default: Date.now },
    reviewTitle: String,
    reviewPara: String,
    rating: Number,
    productId: Number,
    verifiedPurchase: Boolean
  }
});

let Reviews = mongoose.model("Reviews", reviewSchema);

// let save = reviews => {
//   // This function saves a review or reviews to MongoDB
//   const newReviews = new Reviews(reviews);
//   newReviews.save(err => {
//     if (err) console.log("ERROR SAVING TO MONGODB => ", err);
//     console.log("SUCCESSFUL SAVE");
//   });
// };

let saveFakeData = () => {
  var reviewsDataSet = fakedata.genFakeReviews(1);
  console.log("FAKE REVIEWS ===> ", reviewsDataSet instanceof Array);
  const newReviews = new Reviews(reviewsDataSet);
  newReviews.save(err => {
    if (err) console.log("ERROR SAVING TO MONGODB => ", err);
    console.log("SUCCESSFUL SAVE");
  });
};

// module.exports.save = save;
module.exports = { saveFakeData };

const fakedata = require("./fakedata");
const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/reviewdb", { useNewUrlParser: true });

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
let saveFakeData = () => {
  var reviewsDataSet = fakedata.genFakeReviews(1000);
  Reviews.insertMany(reviewsDataSet, (err, docs) => {
    if (err) console.log("ERROR SAVING TO MONGODB => ", err);
    console.log("SUCCESSFUL SAVE");
  });
};

//Init seed list
saveFakeData();

// module.exports.save = save;
module.exports = { saveFakeData };

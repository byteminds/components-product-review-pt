var faker = require("faker");
//Generate 100 Products id 1 thru 100 and product code, name
/**
[
  {
    productId: 1,
    title: 'Amazing Product',
    color: 'red'
    reviews: [
      {
        reviewId: 1
        reviewerHandle: 'John Smith',
        reviewDate: 'January 1, 2019',
        reviewTitle: 'Awesome Product',
        reviewText: 'Great love it. For the price its awesome',
        Helpful: 0,
        rate: 5,
        productId: 0,
        verifiedPurchase: true
      }
    ]
  }
]
 */

let genFakeReviews = function(count, locale) {
  var reviewsDataSet = [];

  if (locale) {
    faker.locale = locale;
  }

  var fakeReviewsArr = new Array(count).fill({});
  fakeReviewsArr.map((el, idx) => {
    var review = {};
    el.reviewId = idx + 1;
    el.reviewerHandle = faker.fake("{{name.lastName}}, {{name.firstName}}");
    el.reviewDate = faker.date.past();
    el.reviewTitle = faker.lorem.sentence();
    el.reviewPara = faker.lorem.paragraph();
    el.rating = faker.random.number({ min: 1, max: 5 });
    el.productId = faker.random.number({ min: 1, max: 100 });
    el.verifiedPurchase = faker.random.boolean();
    review = JSON.parse(JSON.stringify(el));
    reviewsDataSet.push(review);
  });
  return reviewsDataSet;
};

module.exports = { genFakeReviews };

const mongoose = require("mongoose");

describe("insert", () => {
  let db;

  beforeAll(async () => {
    connection = await mongoose.connect("mongodb://localhost/reviewdbtest", {
      useNewUrlParser: true
    });
    db = await mongoose.connection;
  });

  afterAll(async done => {
    await db.dropDatabase();
    await db.close();
    done();
  });

  it("should insert a review into collection", async () => {
    const testReview = db.collection("reviewtest");

    const testReviewData = {
      reviewId: 1234,
      reviewerHandle: "Jimmy Smith",
      reviewDate: 'ISODate("2019-01-18T06:03:15.065Z")',
      reviewTitle: "Awesome Test Product",
      reviewPara: "This is the best product I've every bought.",
      rating: 4,
      productId: 1,
      verifiedPurchase: true
    };
    await testReview.insertOne(testReviewData);

    const reviewTestInsert = await testReview.findOne({ reviewId: 1234 });
    expect(reviewTestInsert).toEqual(testReviewData);
  });
});

describe("summary", () => {
  let db;
  let fakerize = require("./seed/fakedata");
  beforeAll(async () => {
    connection = await mongoose.connect("mongodb://localhost/reviewdb", {
      useNewUrlParser: true
    });
    db = await mongoose.connection;
  });

  afterAll(async done => {
    await db.close();
    done();
  });

  it("should have 1000 reviews in LIVE DB", async () => {
    let data;

    const testReview = db.collection("reviews").countDocuments({});

    const numOfDocs = testReview
      .then(num => {
        data = num;
      })
      .catch(() => console.log("promise err"));

    await numOfDocs;

    expect(data).toBe(1000);
  });
});

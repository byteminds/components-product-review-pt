import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

const axios = require("axios");

// componentDidMount() {}

// onStarClick(nextValue, prevValue, name) {
//   this.setState({ rating: nextValue });
// }

export default function ReviewDetails(props) {
  return props.reviewdataset.map((rv, idx) => {
    return (
      <div key={idx}>
        <div>
          <StarRatingComponent
            name="currentrate"
            starCount={5}
            value={rv.rating}
            starColor={"#ffb400"}
            editing={false}
            emptyStarColor={"#D3D3D3"}
          />
          <a href="#">{rv.reviewTitle}</a>
        </div>
        <div>{rv.reviewPara}</div>
      </div>
    );
  });
}

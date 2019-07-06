import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
// import { yellow } from "@material-ui/core/colors";
// import { isUserWhitespacable } from "@babel/types";
const axios = require("axios");

class ReviewSummaryPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5
    };
  }

  componentDidMount() {}

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <div>
          <StarRatingComponent
            name="currentrate"
            starCount={5}
            value={rating}
            starColor={"#ffb400"}
            editing={false}
            emptyStarColor={"#D3D3D3"}
            onStarClick={this.onStarClick.bind(this)}
          />
        </div>
        <div>{rating} out of 5</div>
      </div>
    );
  }
}

export default ReviewSummaryPane;

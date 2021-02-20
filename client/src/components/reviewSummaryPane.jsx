import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

const ColorCircularProgress = withStyles({
  root: {
    color: "#00695c"
  }
})(CircularProgress);

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#b2dfdb"
  },
  barColorPrimary: {
    backgroundColor: "#ffeb3b"
  }
})(LinearProgress);

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ffeb3b", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ffeb3b"
  }
})(LinearProgress);

// Inspired by the Facebook spinners.
const useStylesFacebook = makeStyles({
  root: {
    position: "relative"
  },
  top: {
    color: "#eef3fd"
  },
  bottom: {
    color: "#6798e5",
    animationDuration: "550ms",
    position: "absolute",
    left: 0
  }
});

export default function ReviewSummaryPane(props) {
  const classes = useStylesFacebook();
  return (
    <div className={classes.root}>
      <div>
        <h3>{props.reviewsummary.total} customer reviews</h3>
        <StarRatingComponent
          name="currentrate"
          starCount={5}
          value={props.reviewsummary.avgRating}
          starColor={"#ffb400"}
          editing={false}
          emptyStarColor={"#d3d3d3"}
        />
      </div>
      <div>{props.reviewsummary.avgRating} out of 5</div>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={100}
      />
    </div>
  );
}

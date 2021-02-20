import React, { Component } from "react";
import ReviewSummaryPane from "./reviewSummaryPane.jsx";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import ReviewDetails from "./reviewDetails.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function ReviewModule(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <ReviewSummaryPane reviewsummary={props.reviewsummary} />
        </Grid>
        <Grid item xs={10}>
          <ReviewDetails reviewdataset={props.reviewdataset} />
        </Grid>
      </Grid>
    </div>
  );
}

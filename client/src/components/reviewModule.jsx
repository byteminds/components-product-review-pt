import React, { Component } from "react";
import ReviewSummaryPane from "./reviewSummaryPane.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ReviewDetails from "./reviewDetails.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
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
          <ReviewSummaryPane />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <ReviewDetails reviewdataset={props.reviewdataset} />
          </Paper>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}

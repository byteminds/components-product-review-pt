import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

var moment = require("moment");
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
}));

export default function ReviewDetails(props) {
  const classes = useStyles();

  return props.reviewdataset.map((rv, idx) => {
    var initials =
      rv.reviewerHandle.split(",")[1].charAt(1) +
      rv.reviewerHandle.split(",")[0].charAt(0);
    return (
      <div className={classes.root} key={idx}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>{initials}</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{rv.reviewerHandle}</Typography>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={1}>
            <Typography gutterBottom variant="subtitle1">
              <StarRatingComponent
                name="currentrate"
                starCount={5}
                value={rv.rating}
                starColor={"#ffb400"}
                editing={false}
                emptyStarColor={"#D3D3D3"}
              />
            </Typography>
          </Grid>
          <Grid container wrap="nowrap" spacing={1}>
            <Typography gutterBottom variant="subtitle1">
              {moment(rv.reviewDate).format("MMMM DD,YYYY")}
            </Typography>
          </Grid>
          <Grid container wrap="nowrap" spacing={1}>
            <Typography gutterBottom variant="subtitle1">
              {rv.reviewPara}
            </Typography>
          </Grid>
        </Paper>
      </div>
    );
  });
}

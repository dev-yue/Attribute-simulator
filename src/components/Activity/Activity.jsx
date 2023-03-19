import React from "react";
import { Typography, Grid, Grow } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Activity = ({ name, image, i }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.activity}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/activity_detail/${i}`}>
          {/* <Link className={classes.links} to={`/movie/${movie.id}`}> */}
          <Typography className={classes.name} variant="h5">
            {name}
          </Typography>
          <img
            alt={name}
            className={classes.image}
            src={image}
          />
        </Link>
      </Grow>
    </Grid>
  );
};

export default Activity;

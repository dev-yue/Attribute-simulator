import React from "react";
import { Grid } from "@mui/material";

import useStyles from "./styles";
import { Profile } from "..";

const ProfileList = ({ numberOfProfiles }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {[...Array(numberOfProfiles)].map((_, i) => (
        <Profile key={i} i={i} />
      ))}
    </Grid>
  );
};

export default ProfileList;

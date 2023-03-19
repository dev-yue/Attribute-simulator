import React from "react";
import { Typography, Grid, Grow} from "@mui/material";
import { Link } from "react-router-dom";
import portraits from "../../assets/portraits/200x300";
import useStyles from "./styles";

const Profile = ({ _, i }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/profile_detail/${i}`}>
          <img
            alt={'student_image'}
            className={classes.image}
            src={portraits[`student${(i) % 10 + 1}`]}
          />
          <Typography className={classes.title} variant="h5">
            {"Jane"}
          </Typography>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Profile;

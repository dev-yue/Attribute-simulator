import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
} from "@mui/material";

import {useParams } from "react-router-dom";
import useStyles from "./styles";

import activityImages from "../../assets/images";
import ActivityForm from "../ActivityForm/ActivityForm";

const activities = [
  { name: "Profile Page", image: activityImages["profileHub"] },
  { name: "SMART Goals", image: activityImages["smartGoals"] },
  { name: "Mentor Hub", image: activityImages["mentorHub"] },
  { name: "Project Hub", image: activityImages["projectHub"] },
];

const MovieInformation = () => {
  const classes = useStyles();
  const { id } = useParams();

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid
        item
        sm={12}
        lg={3}
        style={{ display: "flex", marginTop: "50px", marginBottom: "20px" }}
      >
        <Grid className={classes.poster}>
          <img
            alt={activities[id].name}
            src={activities[id].image}
            className={classes.image}
          />
          <Grid style={{ display: "flex", margin: "30px 70px" }}>
            <Typography className={classes.name} variant="h5">
              <i
                class="fas fa-quote-left"
                style={{
                  alignSelf: "flex-start",
                  fontSize: "1rem",
                }}
              ></i>
              <h5>
                A SMART goal is a specific, measurable, achievable, relevant,
                and time-bound objective that helps clarify purpose, develop a
                plan, and measure progress towards desired outcomes.
              </h5>
              <i
                class="fas fa-quote-right"
                style={{ alignSelf: "flex-end", fontSize: "1rem" }}
              ></i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction="column" lg={8}>
        <Typography variant="h3" align="center" gutterBottom>
          {activities[id].name}
        </Typography>
        <ActivityForm />
      </Grid>

      {/* <Modal
        closeAfterTransition
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        {data?.videos?.results?.length > 0 && (
          <iframe
            autoPlay
            className={classes.video}
            frameBorder="0"
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoplay"
          />
        )}
      </Modal> */}
    </Grid>
  );
};

export default MovieInformation;

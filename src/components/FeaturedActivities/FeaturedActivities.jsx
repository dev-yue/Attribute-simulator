import React from "react";
import { Box, Card,} from "@mui/material";

import useStyles from "./styles";
import activityImages from "../../assets/images";
import Activity from "../Activity/Activity";

function FeaturedActivities() {
  const classes = useStyles();

  const activities = [
    { name: "Profile Page", image: activityImages["profileHub"] },
    { name: "SMART Goals", image: activityImages["smartGoals"] },
    { name: "Mentor Hub", image: activityImages["mentorHub"] },
    { name: "Project Hub", image: activityImages["projectHub"] },
  ];

  return (
    <Box className={classes.featuredCardContainer}>
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        {activities.map((activity, i) => (
          <Activity
            key={i}
            name={activity.name}
            image={activity.image}
            i={i}
          />
        ))}
      </Card>
    </Box>
  );
}

export default FeaturedActivities;

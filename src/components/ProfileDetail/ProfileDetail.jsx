import {
  Typography,
  Grid,
} from "@mui/material";

import { useParams } from "react-router-dom";
import useStyles from "./styles";

import portraitImages from "../../assets/portraits/400x600";
import AttributeScore from "../AttributeScore/AttributeScore";

const activities = [
  { name: "Jane", image: portraitImages["student1"] },
  { name: "Oliva", image: portraitImages["student2"] },
  { name: "Noah", image: portraitImages["student3"] },
  { name: "Aiden", image: portraitImages["student4"] },
  { name: "Emma", image: portraitImages["student5"] },
  { name: "Ava", image: portraitImages["student6"] },
  { name: "Sophia", image: portraitImages["student7"] },
  { name: "William", image: portraitImages["student8"] },
  { name: "Ella", image: portraitImages["student9"] },
  { name: "Elizabeth", image: portraitImages["student10"] },
];

const ProfileDetail = () => {
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
        <img
          className={classes.poster}
          alt={activities[id].name}
          src={activities[id].image}
        />
      </Grid>

      <Grid item container direction="column" lg={8}>
        <Typography variant="h3" align="center" gutterBottom>
          {activities[id].name}
        </Typography>
        <Grid className={classes.starGroup}>
        <AttributeScore starValue={4.0} attribute={"Strong Work Ethics"} />
        <AttributeScore starValue={4.0} attribute={"Positive Attitude"} />
        <AttributeScore starValue={4.0} attribute={"Adaptability"} />
        <AttributeScore starValue={4.0} attribute={"Strong Communication Skills"} />
        <AttributeScore starValue={4.0} attribute={"Teamwork and Collaboration"} />
        <AttributeScore starValue={4.0} attribute={"Attention to Detail"} />
        <AttributeScore starValue={4.0} attribute={"Problem Solving Skills"} />
        <AttributeScore starValue={4.0} attribute={"Willingness to Learn"} />
        <AttributeScore starValue={4.0} attribute={"Interest in the Role"} />
        <AttributeScore starValue={4.0} attribute={"Takes Initiative"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileDetail;

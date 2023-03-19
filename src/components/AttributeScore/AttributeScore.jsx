import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Grid, Typography } from "@mui/material";

const labels = {
  0.5: "Bad",
  1: "Bad+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function AttributeScore({starValue, attribute}) {

  return (
    <Grid style={{margin: "2rem"}}>
      <Typography component="legend">{attribute}</Typography>
      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
          name="text-feedback"
          value={starValue}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>{labels[starValue]}</Box>
      </Box>
    </Grid>
  );
}

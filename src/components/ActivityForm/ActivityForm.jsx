import React, { useState } from "react";
import {
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Card,
} from "@mui/material";
import { Grid } from "@mui/material";
import useStyles from "./styles";

const MaterialFormComponent = (props) => {
  const classes = useStyles();

  const initialValues = {
    goalPlan: "Set",
    goalComplete: "Completed",
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const [formValues, setFormValues] = useState(initialValues);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <Card className={classes.formCard}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container justify="center" direction="column">
          <h3>Set Up Goals</h3>

          <Grid item>
            <FormLabel>Goal Type</FormLabel>
            <FormGroup display="flex">
              <FormControlLabel
                control={<Checkbox name="goalType" />}
                label="Looking for job/internship"
              />
              <FormControlLabel
                control={<Checkbox name="goalType" />}
                label="Learn more about career paths"
              />
            </FormGroup>
          </Grid>
          <Grid item>
            <FormLabel>Goal Plan</FormLabel>
            <RadioGroup
              name="goalPlan"
              defaultValue={formValues.goalPlan}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="Set"
                value="Set"
                control={<Radio size="small" />}
                label="Set"
                defaultSlected
              />
              <FormControlLabel
                key="Skip"
                value="Skip"
                control={<Radio size="small" />}
                label="Skip"
              />
            </RadioGroup>
          </Grid>
          {/* <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{
                backgroundColor: "green",
                margin: "5px",
              }}
            >
              Submit
            </Button>
          </Grid> */}
        </Grid>
        <Grid container justify="center" direction="column">
          <h3>Persue Goals</h3>

          <Grid item>
            <FormLabel>Milestones</FormLabel>
            <FormGroup display="flex">
              <FormControlLabel
                control={<Checkbox name="goalType" />}
                label="Achieve Milestones"
              />
              <FormControlLabel
                control={<Checkbox name="goalType" />}
                label="Modify plans"
              />
              <FormControlLabel
                control={<Checkbox name="goalType" />}
                label="Add new plan"
              />
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container justify="center" direction="column">
          <h3>Complete Goals</h3>
          <Grid item>
            <FormLabel>Goal Complete</FormLabel>
            <RadioGroup
              name="goalComplete"
              defaultValue={formValues.goalComplete}
              row
            >
              <FormControlLabel
                key="Completed"
                value="Completed"
                control={<Radio size="small" />}
                label="Completed"
                defaultSlected
              />
              <FormControlLabel
                key="Unfinished"
                value="Unfinished"
                control={<Radio size="small" />}
                label="Unfinished"
              />
            </RadioGroup>
          </Grid>
          <Grid item>
            <FormLabel>Next Step</FormLabel>
            <FormGroup display="flex">
              <FormControlLabel
                control={<Checkbox name="nextStep" />}
                label="Setup a new goal"
              />
              <FormControlLabel
                control={<Checkbox name="nextStep" />}
                label="Learn more about career paths"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};
export default MaterialFormComponent;

import React from "react";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useStyle } from "./theme";

const SteeperComponent = ({ activeStep }) => {
  const classes = useStyle();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      style={{ paddingLeft: "20%", paddingRight: "20%" }}
    >
      <Grid item sm={12} xs={12}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={classes.root}
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </Grid>
    </Grid>
  );
};

export { SteeperComponent };

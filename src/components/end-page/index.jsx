import React from "react";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useStyle } from "./index.theme";

const PageFour = () => {
  const classes = useStyle();

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.spacing}
      >
        <Grid item>
          <CheckCircleIcon className={classes.checkIcon} />
        </Grid>
        <Grid item sm={12} xs={12} className={classes.title}>
          <h1>
            <strong>Congratulations, Eren!</strong>
          </h1>
        </Grid>
        <Grid item sm={12} xs={12} className={classes.subTitle}>
          <strong>
            You have completed onboarding, you can starting using the Eden!
          </strong>
        </Grid>
      </Grid>
    </>
  );
};

export { PageFour };

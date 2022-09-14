import React from "react";
import Grid from "@mui/material/Grid";
import { useStyle } from "./index.theme";
import { FormThree } from "./form";

const PageThree = () => {
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
        <Grid item sm={12} xs={12} className={classes.title}>
          <h1>
            <strong>How are you planning to use Eden?</strong>
          </h1>
        </Grid>
        <Grid item sm={12} xs={12} className={classes.subTitle}>
          <strong>We'll streamline your setup experience accordingly.</strong>
        </Grid>
      </Grid>
      <FormThree />
    </>
  );
};

export { PageThree };

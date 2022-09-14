import React from "react";
import Grid from "@mui/material/Grid";
import { useStyle } from "./index.theme";
import { FormTwo } from "./form";

const PageTwo = () => {
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
            <strong>Let's set up a home for all your work</strong>
          </h1>
        </Grid>
        <Grid item sm={12} xs={12} className={classes.subTitle}>
          <strong>You can always create another workspace later.</strong>
        </Grid>
      </Grid>
      <FormTwo />
    </>
  );
};

export { PageTwo };

import React from "react";
import Grid from "@mui/material/Grid";
import { useStyle } from "./index.theme";
import { FormOne } from "./form";

const PageOne = () => {
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
            <strong>Welcome! First things first...</strong>
          </h1>
        </Grid>
        <Grid item sm={12} xs={12} className={classes.subTitle}>
          <strong>You can always change them later.</strong>
        </Grid>
      </Grid>
      <FormOne />
    </>
  );
};

export { PageOne };

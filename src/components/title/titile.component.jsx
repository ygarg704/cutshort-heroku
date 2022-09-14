import React from "react";
import Grid from "@mui/material/Grid";
import { useStyle } from "./title.theme";

const TitleComponent = () => {
  const classes = useStyle();

  return (
    <>
      <Grid container className={classes.titleCard} direction="column">
        <Grid item sm={12} xs={12}>
          <h2>Eden</h2>
        </Grid>
      </Grid>
    </>
  );
};

export { TitleComponent };

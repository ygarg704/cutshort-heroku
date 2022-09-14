import React from "react";
import Grid from "@mui/material/Grid";
import { useStyle } from "./title.theme";
import logo from "./Capture.PNG";

const TitleComponent = () => {
  const classes = useStyle();

  return (
    <>
      <Grid container className={classes.titleCard} direction="column">
        <Grid item sm={12} xs={12}>
          <h2>
            <span>
              <img
                src={logo}
                alt="logo"
                style={{ height: "25px", width: "25px", paddingRight: "3px" }}
              />
            </span>
            Eden
          </h2>
        </Grid>
      </Grid>
    </>
  );
};

export { TitleComponent };

import React from "react";
import { PageOne } from "../components/page-one";
import { SteeperComponent } from "../components/stepper/stepper.component";
import { TitleComponent } from "../components/title/titile.component";

const MainPage = () => {
  return (
    <>
      <TitleComponent />
      <SteeperComponent activeStep={0} />
      <PageOne />
    </>
  );
};

export { MainPage };

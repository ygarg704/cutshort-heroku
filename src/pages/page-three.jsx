import React from "react";
import { PageThree } from "../components/page-three";
import { SteeperComponent } from "../components/stepper/stepper.component";
import { TitleComponent } from "../components/title/titile.component";

const ThirdPage = () => {
  return (
    <>
      <TitleComponent />
      <SteeperComponent activeStep={2} />
      <PageThree />
    </>
  );
};

export { ThirdPage };

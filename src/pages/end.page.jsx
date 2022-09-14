import React from "react";
import { PageFour } from "../components/end-page";
import { SteeperComponent } from "../components/stepper/stepper.component";
import { TitleComponent } from "../components/title/titile.component";

const FinalPage = () => {
  return (
    <>
      <TitleComponent />
      <SteeperComponent activeStep={4} />
      <PageFour />
    </>
  );
};

export { FinalPage };

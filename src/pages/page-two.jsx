import React from "react";
import { PageTwo } from "../components/page-two";
import { SteeperComponent } from "../components/stepper/stepper.component";
import { TitleComponent } from "../components/title/titile.component";

const SecondPage = () => {
  return (
    <>
      <TitleComponent />
      <SteeperComponent activeStep={1} />
      <PageTwo />
    </>
  );
};

export { SecondPage };

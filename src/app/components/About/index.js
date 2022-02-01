import React from "react";
import Header from '../../layouts/header'

import FirstComp from "./FirstComp";
import SecondComp from "./SecondComp";
import ThirdComp from "./ThirdComp";

function About() {
  return (
    <React.Fragment>
       <Header />
       <FirstComp />
      <SecondComp />
      <ThirdComp/>
    </React.Fragment>
  );
}

export default About;

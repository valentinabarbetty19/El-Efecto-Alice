import React from "react";
import { bifur11Array } from "../data";

import Story from "../Intro/Story";
const Bifur11 = ({ language }) => {

  const info = bifur11Array;

  return (
    <Story language={language}  info={info} />
  );
};

export default Bifur11;


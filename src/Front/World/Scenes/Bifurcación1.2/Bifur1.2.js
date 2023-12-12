import React from "react";
import { bifur12Array } from "../data";

import Story from "../Intro/Story";
const Bifur12 = ({ language }) => {

  const info = bifur12Array;

  return (
    <Story language={language}  info={info} />
  );
};

export default Bifur12;

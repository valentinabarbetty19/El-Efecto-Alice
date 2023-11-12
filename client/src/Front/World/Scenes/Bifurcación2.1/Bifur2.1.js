import React from "react";
import { bifur21Array } from "../data";

import Story from "../Intro/Story";
const Bifur21 = ({ language }) => {

  const info = bifur21Array;

  return (
    <Story language={language}  info={info} />
  );
};

export default Bifur21;

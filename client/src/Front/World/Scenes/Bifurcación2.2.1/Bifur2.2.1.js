import React from "react";
import { bifur221Array } from "../data";

import Story from "../Intro/Story";
const Bifur221 = ({ language }) => {

  const info = bifur221Array;

  return (
    <Story language={language}  info={info} />
  );
};

export default Bifur221;

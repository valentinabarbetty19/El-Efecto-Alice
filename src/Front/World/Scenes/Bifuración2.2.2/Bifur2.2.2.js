import React from "react";
import { bifur222Array } from "../data";

import Story from "../Intro/Story";
const Bifur222 = ({ language }) => {

  const info = bifur222Array;

  return (
    <Story language={language}  info={info} />
  );
};

export default Bifur222;

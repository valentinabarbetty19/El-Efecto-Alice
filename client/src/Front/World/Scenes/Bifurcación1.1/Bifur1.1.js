import React from "react";
import { bifur11Array } from "../data";

import Story from "../Intro/Story";
const Bifur11 = ({ language, sound }) => {

  const info = bifur11Array;

  return (
    <Story language={language}  info={info} sound={sound}/>
  );
};

export default Bifur11;

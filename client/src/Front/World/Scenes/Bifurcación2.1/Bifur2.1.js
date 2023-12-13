import React from "react";
import { bifur21Array } from "../data";

import Story from "../Intro/Story";
const Bifur21 = ({ language, sound }) => {

  const info = bifur21Array;

  return (
    <Story language={language}  info={info} sound={sound}/>
  );
};

export default Bifur21;

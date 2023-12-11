import React from "react";
import { bifur221Array } from "../data";

import Story from "../Intro/Story";
const Bifur221 = ({ language, sound }) => {

  const info = bifur221Array;

  return (
    <Story language={language}  info={info} sound={sound}/>
  );
};

export default Bifur221;

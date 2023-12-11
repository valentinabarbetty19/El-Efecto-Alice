import React, { useState } from "react";
import { bifur1Array } from "../data";

import Story from "../Intro/Story";
const Bifur1 = ({ language, sound }) => {

  const info = bifur1Array;
  const route1 = "/game/bifur1/bifur1"
  const route2 = "/game/bifur1/bifur2"

  return (
    <Story language={language}  info={info} route1={route1} route2={route2} sound={sound}/>
  );
};

export default Bifur1;

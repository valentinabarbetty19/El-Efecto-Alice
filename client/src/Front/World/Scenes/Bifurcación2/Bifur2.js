import React, { useState } from "react";
import { bifur2Array } from "../data";

import Story from "../Intro/Story";
const Bifur2 = ({ language, sound }) => {
  const info = bifur2Array;
  const route1 = "/game/bifur2/bifur1"
  const route2 = "/game/bifur2/bifur2"

  return (
    <Story language={language}  info={info} route1={route1} route2={route2} sound={sound}/>
  );
};

export default Bifur2;

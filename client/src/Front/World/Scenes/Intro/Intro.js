import React, { useState } from "react";

import { introArray } from "./data";
import Story from "../Intro/Story";
const Intro = ({ language }) => {

  const info = introArray;
  const route1 = "/game/bifur1"
  const route2 = "/game/bifur2"
  

  return (
    <Story language={language}  info={info} route1={route1} route2={route2}
    />
  );
};

export default Intro;
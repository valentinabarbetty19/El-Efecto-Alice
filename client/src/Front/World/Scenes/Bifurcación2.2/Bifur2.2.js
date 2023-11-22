import React from "react";
import { bifur22Array } from "../data";

import Story from "../Intro/Story";
const Bifur22 = ({ language }) => {

  const info = bifur22Array;
  const route1 = "/game/bifur2/bifur2/bifur1"
  const route2 = "/game/bifur2/bifur2/bifur2"

  return (
    <Story language={language}  info={info} route1={route1} route2={route2}/>
  );
};

export default Bifur22;

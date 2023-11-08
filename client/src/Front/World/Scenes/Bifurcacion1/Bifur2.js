import React, { useState } from "react";
import { bifur2Array } from "./data";

import Story from "../Intro/Story";
const Bifur2 = ({ language }) => {
  const info = bifur2Array;
  const route = "/home"

  return (
    <Story language={language}  info={info} route={route}/>
  );
};

export default Bifur2;

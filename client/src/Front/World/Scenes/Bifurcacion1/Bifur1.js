import React, { useState } from "react";
import { bifur1Array } from "./data";

import Story from "../Intro/Story";
const Bifur1 = ({ language }) => {

  const info = bifur1Array;
  const route = "/login"

  return (
    <Story language={language}  info={info} route={route} />
  );
};

export default Bifur1;
import React, { useState, useContext, useEffect } from "react";
import { bifur1Array } from "./data";
import { authContext } from "../../../../context/AuthContext";

import Story from "../Intro/Story";
const Bifur1 = ({ language }) => {
  const { id ,setId } = useContext(authContext);
  const info = bifur1Array;
  const route = "/login";

  useEffect(() => {
    setId(id + 1);
    console.log(id);
  }, [setId]);

  return (
    <Story language={language} info={info} route={route} />
  );
};

export default Bifur1;
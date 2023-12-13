import React, { useState, useContext, useEffect } from "react";
import { bifur2Array } from "../data";
import { authContext } from "../../../../context/AuthContext";


import Story from "../Intro/Story";
const Bifur2 = ({ language, sound }) => {
  const info = bifur2Array;
  const route = "/home"
  const { id, setId } = useContext(authContext);

  useEffect(() => {
    
    setId(id + 1);
    console.log(id);

  }, [setId]);

  return (
    <Story language={language} info={info} route={route} sound={sound} />
  );
};

export default Bifur2;
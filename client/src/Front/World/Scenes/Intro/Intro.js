import React, { useState } from 'react'
import './Intro.css'
import Scene from '../Scene/Scene'
import {introArray} from './data'
const Intro = ({language}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    // Handle image change logic here, e.g., increment the index
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % introArray.length);
  };
  return (
    <Scene text={language === "español" ? introArray[currentImageIndex].mensaje : introArray[currentImageIndex].message}
    img={introArray[currentImageIndex].imageUrl} onClick={changeImage}/>
    
    
  )
}

export default Intro
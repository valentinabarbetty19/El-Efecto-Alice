import React, { useState, useEffect, useCallback, useRef } from "react";
import Sound from "react-sound"; // Asegúrate de tener 'react-sound' instalado en tu proyecto

const Typewriter = ({ keyProp, text, speed, volume }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingSoundPlaying, setTypingSoundPlaying] = useState(false);
  const soundRef = useRef(null);

  const typingSoundUrl = "/assets/Audio/maquina_escribir.mp3";

  const resetText = useCallback(() => {
    setDisplayedText("");
  }, []);

  const handleDivClick = useCallback(() => {
    //setTypingSoundPlaying(true);
    // Play the sound
    if (soundRef.current && soundRef.current.play) {
      soundRef.current.play();
    }
  }, []);

  useEffect(() => {
    resetText();
  }, [keyProp, resetText]);

  useEffect(() => {
    let interval;

    if (text && text.length > 0) {
      interval = setInterval(() => {
        setDisplayedText((prevText) => {
          if (prevText.length < text.length) {
            return text.substring(0, prevText.length + 1);
          } else {
            clearInterval(interval);
            setTypingSoundPlaying(false);
            return prevText;
          }
        });
      }, speed);
    }

    return () => {
      clearInterval(interval);
    };
  }, [text, speed]);

  return (

      <p>{displayedText}</p>
     
  );
};

export default Typewriter;

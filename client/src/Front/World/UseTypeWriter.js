import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    // Limpieza del intervalo en el desmontaje del componente
    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  // Devuelve el texto que se muestra
  return displayText;
};

export default useTypewriter;

import useTypewriter from "./UseTypeWriter";

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);
  console.log(displayText)
  return <p>{displayText}</p>;
};

export default Typewriter;
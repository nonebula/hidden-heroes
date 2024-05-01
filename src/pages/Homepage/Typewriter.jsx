import useTypewriter from "../../hooks/useTypewriter";
import PropTypes from "prop-types";

const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);
  
    return <p>{displayText}</p>;
};

Typewriter.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
};

export default Typewriter;


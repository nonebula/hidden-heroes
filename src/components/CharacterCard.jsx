import PropTypes from "prop-types";

const CharacterCard = ({
  character: {
    name,
    profileimg,
    age,
    gender,
    superpower,
    location,
    background,
    discovered,
  },
}) => {
  return (
    <div className="card">
      <div>
        <img src={profileimg} alt={name} />
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Superpower: {superpower}</p>
        <p>Location: {location}</p>
        <p>Discovered: {discovered}</p>
      </div>
      <div>
        <h2>Background</h2>
        <p>{background}</p>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profileimg: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    superpower: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    discovered: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;

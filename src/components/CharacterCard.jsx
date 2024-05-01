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
    // discovered,
  },
}) => {
  return (
    <div className="card flex flex-col items-center border border-lime-600 rounded-lg font-roboto-mono bg-neutral-950 w-1/2">
      <div>
        <img src={profileimg} alt={name} className="size-72" />
        <h2 className="font-bold text-2xl underline text-lime-700 mb-2 animate-pulse">{name}</h2>
        <p className="text-lime-500 mb-2">
          <strong>Age:</strong> {age}
        </p>
        <p className="text-lime-500 mb-2">
          <strong>Gender:</strong> {gender}
        </p>
        <p className="text-lime-500 mb-2">
          <strong>Superpower:</strong> {superpower}
        </p>
        <p className="text-lime-500 mb-5">
          <strong>Location:</strong> {location}
        </p>
        {/* <p>Discovered: {discovered}</p> */}
      </div>
      <div className="hidden">
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
    // discovered: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;

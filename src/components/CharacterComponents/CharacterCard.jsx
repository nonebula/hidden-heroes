import PropTypes from "prop-types";
import { useState } from "react";

const CharacterCard = ({
  character: {
    name,
    profileimg,
    age,
    gender,
    superpower,
    location,
    background,
  },
}) => {
  const [showBackground, setShowBackground] = useState(false);

  return (
    <div
      className="card relative flex flex-col items-center border border-lime-600 rounded-lg font-roboto-mono bg-neutral-950 w-1/2 hover:scroll-smooth scale-90 hover:shadow-lg hover:border-lime-600 hover:opacity-100 hover:scale-100 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setShowBackground(true)}
      onMouseLeave={() => setShowBackground(false)}
    >
      <div className="hover:opacity-10">
        <img src={profileimg} alt={name} className="size-72" />
        <h2 className="font-bold text-2xl underline text-lime-700 mb-2 animate-pulse">
          {name}
        </h2>
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
      </div>
      {showBackground && (
        <div className="absolute bg-white h-full w-full hover:opacity-100 p-4 border border-lime-600 rounded-b-lg overflow-scroll text-left">
          <h2 className="text-black text-left underline">Background</h2>
          <p className="text-gray-800">{background}</p>
        </div>
      )}
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
  }).isRequired,
};

export default CharacterCard;

import React from "react";
import PropTypes from "prop-types";

const BackstoryLogic = ({
  original: { profileImg, name, alias, backstory, planetOfOrigin, age },
}) => {
  return (
    <div className="container flex flex-col items-center mb-5 mt-5 pl-24 pr-24">
      <img
        src={profileImg}
        alt={name}
        className="w-64 h-64 rounded-full mt-5 mb-5"
      />
      <h1 className="text-lime-700 font-bold mt-5 mb-5 animate-pulse">
        Name: {name} (A.K.A {alias})
      </h1>
      <p className="text-lime-500 mt-5 mb-5">
        Planet: {planetOfOrigin} | Age: {age} Earth Years
      </p>
      <p className="text-lime-500 mt-5 mb-10">{backstory}</p>
    </div>
  );
};

BackstoryLogic.propTypes = {
  original: PropTypes.shape({
    profileImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
    backstory: PropTypes.string.isRequired,
    planetOfOrigin: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default BackstoryLogic;

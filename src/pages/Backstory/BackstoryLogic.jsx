import PropTypes from "prop-types";

const BackstoryLogic = ({
  original: { profileImg, name, alias, backstory, planetOfOrigin, age },
}) => {
  const ageNumber = parseInt(age);

  return (
    <div className="bg-black border border-lime-500 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 flex flex-col items-center font-roboto-mono">
      <img
        src={profileImg}
        alt={name}
        className="w-48 sm:w-64 h-48 sm:h-64 rounded-full mt-5 mb-5"
      />
      <h1 className="text-lime-700 font-bold mt-5 mb-5 text-lg sm:text-xl animate-pulse">
        Name: {name} (A.K.A {alias})
      </h1>
      <p className="text-lime-500 mt-5 mb-5 text-sm sm:text-base">
        Planet: {planetOfOrigin} | Age: {ageNumber} Earth Years
      </p>
      <p className="text-lime-500 mt-5 mb-10 text-sm sm:text-base">
        {backstory}
      </p>
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
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default BackstoryLogic;

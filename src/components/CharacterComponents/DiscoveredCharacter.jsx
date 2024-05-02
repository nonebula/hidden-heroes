import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

const DiscoveredCharacters = ({ characters }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

DiscoveredCharacters.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default DiscoveredCharacters;

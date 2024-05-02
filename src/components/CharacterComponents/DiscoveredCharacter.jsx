import React from "react";
import CharacterCard from "./CharacterCard";

const DiscoveredCharacters = ({ characters }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default DiscoveredCharacters;

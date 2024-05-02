import { useState } from "react";
import Map from "../../components/MapComponents/Map";
import initialCharacters from "../../data/characters.json";
import Characters from "../../components/CharacterComponents/Characters";

const Discover = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState(initialCharacters);

  const handleMarkerClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseCard = () => {
    setSelectedCharacter(null);
  };

  const handleDiscover = (characterId) => {
    const updatedCharacters = characters.map((char) =>
      char.id === characterId ? { ...char, discovered: true } : char
    );
    setCharacters(updatedCharacters);
  };

  const discoveredCharacters = characters.filter(
    (character) => character.discovered
  );

  return (
    <div className="bg-black border border-lime-500 px-16 mx-16 pb-20 flex flex-col items-center font-roboto-mono">
      <h1 className="text-lime-700 text-4xl font-bold mt-5 mb-10">Discover</h1>
      <p className="text-lime-500 mb-10">
        There have been reports of abnormally lucky experiences in London,
        trending on social media. Our intelligence suggests there may be a
        special in the area. Click around to inspect different spots and see if
        you have any luck. Once you are done with London, get out there and see
        who else you can find. We cannot miss this opportunity to locate these
        specials!
      </p>
      <Map
        characters={characters}
        setCharacters={setCharacters}
        handleDiscover={handleDiscover}
        onPopupClose={handleCloseCard}
      />
      {discoveredCharacters.map((char) => (
        <Characters key={char.id} character={char} />
      ))}
    </div>
  );
};

export default Discover;

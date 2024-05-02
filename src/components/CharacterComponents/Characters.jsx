import CharacterCard from "./CharacterCard";
import charactersData from "../../data/characters.json";

const Characters = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {charactersData.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;

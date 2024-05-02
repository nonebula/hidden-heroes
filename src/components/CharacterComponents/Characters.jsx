import CharacterCard from "./CharacterCard";
import characters from "../../data/characters.json";

const Characters = () => {
  return (
    <div className="container">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import characters from "../../data/characters.json";

import PropTypes from "prop-types";
import CharacterCard from "../CharacterComponents/CharacterCard";

function Map({ onMarkerClick }) {
  return (
    <MapContainer
      className="mb-16"
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {characters.map((character) => (
        <Marker
          key={character.id}
          position={character.position}
          onClick={() => onMarkerClick(character)}
        >
          <Popup>
            <div className="popup-content">
              <CharacterCard character={character} />
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

Map.propTypes = {
  characters: PropTypes.array.isRequired,
  onMarkerClick: PropTypes.func.isRequired,
};

export default Map;

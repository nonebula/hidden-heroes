import { MapContainer, Polygon, Popup, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";
import CharacterCard from "../CharacterComponents/CharacterCard";

function Map({ characters, handleDiscover, handlePolygonClick }) {
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
        <Polygon
          key={character.id}
          positions={character.polygon}
          eventHandlers={{
            click: () => handlePolygonClick(character),
          }}
          color="transparent"
          fillOpacity={0}
        >
          <Popup>
            <div className="popup-content font-roboto-mono">
              <CharacterCard character={character} />
              <button
                className="btn bg-lime-700 rounded-lg w-full h-10 text-white font-bold"
                onClick={() => handleDiscover(character.id)}
              >
                Discover
              </button>
            </div>
          </Popup>
        </Polygon>
      ))}
    </MapContainer>
  );
}

Map.propTypes = {
  characters: PropTypes.array.isRequired,
  handleDiscover: PropTypes.func.isRequired,
  handlePolygonClick: PropTypes.func.isRequired,
};

export default Map;

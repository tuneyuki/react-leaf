import "leaflet/dist/leaflet.css";
import "./styles.css";
import { TileLayer, MapContainer } from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";

import { useEffect, useState } from "react";

const heatmapData = [
    [34.83292835997159, 135.72679772514724],
    [34.82602923134362, 135.69663412514694],
    [34.831720324556755, 135.7378397963118],
    [34.79277660192436, 135.77596705398093],
    [34.82883000086084, 135.73843902514693],
    [34.841023884838016, 135.7199887558301],
    [34.84019925813582, 135.71589806747667],
    [34.986068724216636, 135.75888471350618],
    [35.62858463929001, 139.73873823867137],
    [35.655527353807514, 139.73668089634307],
];

function Heatmap() {
  const [position, setPosition] = useState([36.498010974874425, 139.50149773520016]);
  const [data, setData] = useState([]);
  const heatmapOptions = {
    radius: 20,
    blur: 20,
    maxZoom: 18,
    minOpacity: 0.5,
    maxOpacity: 1
  };

  useEffect(() => {
    setData(heatmapData);
  }, [data]);

  return (
    <>
        <MapContainer
          center={position}
          zoom={5}
          key={Math.random()}
        >
          <HeatmapLayer
            points={data}
            longitudeExtractor={(point) => point[1]}
            latitudeExtractor={(point) => point[0]}
            intensityExtractor={(point) => parseFloat('100')}
            key={Math.random() + Math.random()}
            {...heatmapOptions}
          />
          <TileLayer
            url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
    </>
  );
}

export default Heatmap;

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapEvents from "../MapEvents/MapEvents";
import CalculateToll from "../tollForm/CalulateToll";

const Display = () => {
  const [markers, setMarkers] = useState([]);

  const setFromTo = (latitude, longitude) => {
    setMarkers([...markers, [latitude, longitude]]);
  };

  const resetFromTo = () => {
    if (markers.length === 0) return;
    setMarkers([]);
  };

  return (
    <>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "70vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapEvents fromTo={markers} setFromTo={setFromTo} />

        {markers &&
          markers.map((marker, index) => (
            <Marker key={`marker-${index}`} position={[marker[0], marker[1]]}>
              <Popup>
                {index === 0 ? "From:" : "To:"}
                <br />
                {marker[0]}, {marker[1]}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
      <CalculateToll fromTo={markers} resetFromTo={resetFromTo} />
    </>
  );
};

export default Display;

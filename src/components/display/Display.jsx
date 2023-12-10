import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Display.css";

const Display = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (markers.length === 2) {
      console.log(`From: ${markers[0].lat}, ${markers[0].lng}`);
      console.log(`To: ${markers[1].lat}, ${markers[1].lng}`);
    }
  }, [markers]);

  const handleMarkerClick = (event) => {
    if (markers.length < 2) {
      setMarkers((prevMarkers) => [...prevMarkers, event.latlng]);
    } else {
      setMarkers((prevMarkers) => [
        ...prevMarkers.slice(0, 1), // Keep first marker
        event.latlng,
      ]);
    }
  };

  return (
    <MapContainer
      center={[22.531404, 88.365632]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "70vh", width: "100%" }}
      onClick={handleMarkerClick}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={`marker-${index}`} position={marker}>
          <Popup>
            {index === 0 ? "From:" : "To:"}
            <br />
            {marker.lat}, {marker.lng}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Display;

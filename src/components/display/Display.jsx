import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapEvents from "./../MapEvents/MapEvents";

const Display = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (markers.length === 2) {
      const [from, to] = markers;
      console.log(`From: ${from.lat}, ${from.lng}`);
      console.log(`To: ${to.lat}, ${to.lng}`);
    }
  }, [markers]);

  const handleMapClick = (event) => {
    const clickedLatLng = event.latlng;
    const newMarker = {
      lat: clickedLatLng.lat.toFixed(6),
      lng: clickedLatLng.lng.toFixed(6),
    };

    if (markers.length < 2) {
      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    } else {
      // Reset markers if there are already two
      setMarkers([newMarker]);
    }
  };

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "70vh", width: "100%" }}
    >
      <TileLayer
        onClick={handleMapClick}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents />

      {/* {markers.map((marker, index) => (
        <Marker key={`marker-${index}`} position={[marker.lat, marker.lng]}>
          <Popup>
            {index === 0 ? "From:" : "To:"}
            <br />
            {marker.lat}, {marker.lng}
          </Popup>
        </Marker>
      ))} */}
    </MapContainer>
  );
};

export default Display;

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapEvents from "./../MapEvents/MapEvents";

const Display = () => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "70vh", width: "100%" }}
    >
      <TileLayer
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

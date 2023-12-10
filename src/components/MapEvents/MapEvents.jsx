import { useMapEvents } from "react-leaflet";

const MapEvents = ({ fromTo, setFromTo }) => {
  useMapEvents({
    click(e) {
      if (fromTo.length > 1) return;

      // setState your coords here
      // coords exist in "e.latlng.lat" and "e.latlng.lng"
      console.log(e.latlng.lat);
      console.log(e.latlng.lng);
      setFromTo(e.latlng.lat, e.latlng.lng);
    },
  });
  return false;
};

export default MapEvents;

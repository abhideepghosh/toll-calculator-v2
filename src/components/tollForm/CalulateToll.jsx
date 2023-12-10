import { useState } from "react";
import "./CalculateToll.css";

const CalculateToll = ({ fromTo, resetFromTo }) => {
  const [details, setDetails] = useState(null);

  const resetApp = () => {
    resetFromTo();
    setDetails(null);
  };

  const generateToll = async () => {
    if (fromTo.length < 2) {
      alert(`Select From/To`);
      return;
    }
    try {
      const url = "https://tollguru-backend.onrender.com/";
      const body = JSON.stringify({
        from: {
          lat: fromTo[0][0],
          lng: fromTo[0][1],
        },
        to: {
          lat: fromTo[1][0],
          lng: fromTo[1][1],
        },
      });
      const headers = {
        "Content-Type": "application/json",
      };

      const options = {
        method: "POST",
        headers,
        body,
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!details ? (
        <div>
          <button onClick={resetFromTo}>Reset</button>
          <button onClick={generateToll}>Generate Toll</button>
        </div>
      ) : (
        <div>
          <h1>Toll Details</h1>
          <p>
            Distance: {details.routes[0].summary.distance.metric} /{" "}
            {details.routes[0].summary.distance.text}
          </p>
          <p>Duration: {details.routes[0].summary.duration.text}</p>
          <p>
            Fuel Price: {details.summary.fuelPrice.value} {}
          </p>
          <button onClick={resetApp}>Reset Toll Calculator</button>
        </div>
      )}
    </div>
  );
};

export default CalculateToll;

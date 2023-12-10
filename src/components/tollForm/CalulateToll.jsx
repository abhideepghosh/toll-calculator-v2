import "./CalculateToll.css";

const CalculateToll = ({ fromTo, resetFromTo }) => {
  console.log(fromTo);

  const generateToll = async () => {
    try {
      const url =
        "https://apis.tollguru.com/toll/v2/origin-destination-waypoints";
      const apiKey = "jfNQjLR6nj2pLPPbQB6j32hrBPG4PrN9";
      const body = JSON.stringify({
        from: {
          lat: 39.95209,
          lng: -75.16219,
        },
        to: {
          lat: 40.71455,
          lng: -74.00715,
        },
        waypoints: [
          {
            address: "Bridgewater Township , New Jersey",
          },
        ],
        serviceProvider: "here",
        vehicle: {
          type: "2AxlesTaxi",
          weight: {
            value: 20000,
            unit: "pound",
          },
          height: {
            value: 7.5,
            unit: "meter",
          },
          length: {
            value: 7.5,
            unit: "meter",
          },
          axles: 4,
          emissionClass: "euro_5",
        },
      });
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      };

      const options = {
        method: "POST",
        headers,
        body,
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={resetFromTo}>Reset</button>
      <button onClick={generateToll}>Generate Toll</button>
      <p>{fromTo}</p>
    </div>
  );
};

export default CalculateToll;

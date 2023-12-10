import "./CalculateToll.css";

const CalculateToll = ({ fromTo, resetFromTo }) => {
  console.log(fromTo);

  const generateToll = () => {
    const data = fetch(
      "https://apis.tollguru.com/toll/v2/origin-destination-waypoints",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "jfNQjLR6nj2pLPPbQB6j32hrBPG4PrN9",
        },
        body: JSON.stringify({
          from: {
            // address: 'Philadelphia , Pennsylvania',
            lat: 39.95209,
            lng: -75.16219,
          },
          to: {
            // address: 'New York ,NY',
            lat: 40.71455,
            lng: -74.00715,
          },
          // waypoints: [{ address: 'Bridgewater Township , New Jersey' }],
          serviceProvider: "here",
          vehicle: {
            type: "2AxlesTaxi",
            weight: { value: 20000, unit: "pound" },
            height: { value: 7.5, unit: "meter" },
            length: { value: 7.5, unit: "meter" },
            axles: 4,
            emissionClass: "euro_5",
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
      });
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

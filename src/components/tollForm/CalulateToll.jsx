import "./CalculateToll.css";

const CalculateToll = ({ fromTo, resetFromTo }) => {
  console.log(fromTo);

  return (
    <div>
      <button onClick={resetFromTo}>Reset</button>
      <button>Generate Toll</button>
      <p>{fromTo}</p>
    </div>
  );
};

export default CalculateToll;

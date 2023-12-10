import "./App.css";
import Display from "./components/display/Display";
import Header from "./components/header/Header";
import CalculateToll from "./components/tollForm/CalulateToll";

function App() {
  return (
    <div>
      <Header />
      <Display />
      <CalculateToll />
    </div>
  );
}

export default App;

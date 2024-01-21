import { useState } from "react";
import "./App.css";

function App() {
  let [counterValue, setCounter] = useState(0);

  const addValue = () => {
    if (counterValue < 20) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      alert(`Counter cannot exceed ${counterValue}`);
    }
  };

  const removeValue = () => {
    if (counterValue > 0) {
      setCounter(counterValue - 1);
    } else {
      alert("Counter cannot` exceed 0");
    }
  };

  return (
    <>
      <h1>Ahmad Aur Code</h1>
      <h3>Counter Value: {counterValue}</h3>
      <button onClick={addValue} className="button-85" role="button">
        Add Value
      </button>
      <button onClick={removeValue} className="button-85" role="button">
        Remove Value
      </button>
    </>
  );
}

export default App;

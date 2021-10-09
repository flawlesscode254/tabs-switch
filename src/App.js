import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };

  return (
    <div id="main" className="App">
      <h1>{count}</h1>
      <button
        style={{
          cursor: "pointer",
        }}
        onClick={changeCount}
      >
        Increment Count
      </button>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <div className="App">
      <Buttons 
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Buttons 
        title="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

export default App;

function Buttons({
  title,
  activeTab,
  setActiveTab
}) {

  const changeButton = () => {
    setActiveTab(title)
  }

  return (
    <div>
      <button 
      onClick={changeButton}
      style={{
        backgroundColor: activeTab === title ? "black" : "white",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        color: activeTab === title ? "white" : "black",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer",
        borderRadius: 5
      }}>{title}</button>
    </div>
  )
}
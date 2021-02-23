import React from "react";
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Embiid"}
        firstName={"Joel"}
        age={25}
        hair={"black"}
      />
      <PersonCard
        lastName={"Beal"}
        firstName={"Bradley"}
        age={29}
        hair={"black"}
      />
      <PersonCard
        lastName={"Anthony Towns"}
        firstName={"Karl"}
        age={23}
        hair={"black"}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Box from "./components/box";
import Input from "./components/input";

function App() {
  const [box, setBox] = useState({
    colors: [],
  });

  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4 my-3">Box Generator</h1>
        <Input setBox={setBox} box={box} />
        <div className="row">
          {box.colors.map((color) => (
            <Box color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

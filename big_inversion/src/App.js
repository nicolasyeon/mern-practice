import logo from './logo.svg';
import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Embiid"}
        firstName={"Joel"}
        age={25}
        hair={"Black"}
      />
      <PersonCard
        lastName={"Beal"}
        firstName={"Bradley"}
        age={29}
        hair={"Black"}
      />
      <PersonCard
        lastName={"Anthony Towns"}
        firstName={"Karl"}
        age={23}
        hair={"Black"}
      />
    </div>
  );
}

export default App;
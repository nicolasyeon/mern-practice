import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [listPokemon, setListPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setListPokemon(jsonResponse.results);
        setPokemon(jsonResponse.results[1]);
      })
      .catch((error) => {
        console.log("OOPS! A pokemon destroyed your request!");
        console.log(error);
      });
    console.log("GOTTA CATCH EM ALL!!!")
  }

  return (
    <div className="App">
      <h2>PokeApi</h2>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      {
        listPokemon.map((pokemon, index) => (
          <div>
            <ul>{pokemon.name}</ul>
          </div>
        ))
      }
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import PirateList from './components/PirateList';
import PirateForm from './components/PirateForm';
import PirateDetails from './components/PirateDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <PirateList path="/" />
        <PirateForm path="/pirate/new" />
        <PirateDetails path="/pirate/:id" />
      </Router>
    </div>
  );
}

export default App;

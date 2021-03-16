import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import WordColors from './components/WordColors';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Home path="/home" />
//         <Number path="/:id" />
//         <Word path="/:word" />
//         {/* <WordColors path="/:value/:color/:color" /> */}
//       </Router>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Home path="/:word" />
        <Home path="/:word/:font/:bground" />
      </Router>
    </div>
  );
}
export default App;


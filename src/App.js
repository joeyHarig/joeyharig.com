import React from 'react';
import Data from './data.json';
import { 
  Route,
  //Redirect,
  BrowserRouter as Router
 } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Nav from './components/navigation/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Router>
          <Route path="/" component={ LandingPage } data={ Data } />
        </Router>
      </main>
    </div>
  );
}

export default App;

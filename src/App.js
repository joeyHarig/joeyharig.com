import React from 'react';
import { 
  Route,
  Redirect,
  BrowserRouter as Router
 } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

//import Icon from './components/icons/Icon';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={ LandingPage } />
      </Router>
    </div>
  );
}

export default App;

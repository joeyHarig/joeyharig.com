import React from 'react';
import { 
  Route,
  Switch,
  BrowserRouter as Router
 } from 'react-router-dom';
 // Google Analytics Package
import ReactGA from 'react-ga';

import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import Blu360 from './pages/caseStudies/Blu360';
import WhatTheHelp from './pages/caseStudies/WhatTheHelp';
import DesignGallery from './pages/caseStudies/DesignGallery';
import Nav from './components/navigation/Nav';
import Footer from './components/sections/Footer';

ReactGA.initialize('UA-148592758-2');

const App = () => {
  
  // Log pageview in GA
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
          <Switch>
            <Route path="/projects/blu360" >
              <Nav route='' />
              <Blu360 />
              {document.body.scrollTop = 0}
            </Route>
            <Route path="/projects/what_the_help" >
              <Nav route='' />
              <WhatTheHelp />
            </Route>
            <Route path="/design_gallery" >
              <Nav route='' />
              <DesignGallery />
            </Route>
            <Route path="/" >
              <Nav route='home' />
              <LandingPage />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

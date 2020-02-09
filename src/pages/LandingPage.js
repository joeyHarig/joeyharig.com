import React from 'react';
import ReactGA from 'react-ga';
import Home from '../components/sections/Home';
import Projects from '../components/sections/Projects';
import AboutMe from '../components/sections/AboutMe';
import ContactMe from '../components/sections/ContactMe';

const LandingPage = props => {
    
    // Log pageview in GA
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div>
            <Home />
            <Projects data = { props.data }/>
            <AboutMe />
            <ContactMe />
        </div>
    );
};

export default LandingPage;
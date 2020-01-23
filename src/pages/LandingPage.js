import React from 'react';
//import logoFilled from '../components/icons/logoFilled.svg';
//import './LandingPage.scss';
import Home from '../components/sections/Home';
import Projects from '../components/sections/Projects';
import AboutMe from '../components/sections/AboutMe';
import ContactMe from '../components/sections/ContactMe';

const LandingPage = props => {
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
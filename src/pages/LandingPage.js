import React from 'react';
//import logoFilled from '../components/icons/logoFilled.svg';
//import './LandingPage.scss';
import Home from '../components/sections/Home';
import Projects from '../components/sections/Projects';

const LandingPage = props => {
    return (
        <div>
            <Home />
            <Projects data = { props.data }/>
        </div>
    );
};

export default LandingPage;
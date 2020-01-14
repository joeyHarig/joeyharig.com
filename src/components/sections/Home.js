import React from 'react';
import MouseAnimation from '../icons/animated/MouseAnimation';
import logoFilled from '../icons/logoFilled.svg';
import './home.scss';

const Home = () => {
    return (
        <section id="home">
            <div className="home-title_container">
                <h1>Joey Harig</h1>
                <h2>a designer who can code</h2>
            </div>
            <img className="home-background-logo" src={logoFilled} alt="logo"/>
            <MouseAnimation />
        </section>
    );
};

export default Home;

import React from 'react';
import MouseAnimation from '../icons/animated/MouseAnimation';
import logoFilled from '../icons/logoFilled.svg';
import SocialLinks from '../uiElements/SocialLinks';
import './home.scss';

const Home = () => {
    return (
        <section id="home">
            <div className="home-title_container">
                <h1>Joey Harig</h1>
                <h2>designer / developer</h2>
            </div>
            <img   
                className="home-background-logo" 
                src={logoFilled} 
                alt="logo"
            />
            <MouseAnimation />
            <SocialLinks />
        </section>
    );
};

export default Home;

import React from 'react';
import SocialLinks from '../uiElements/SocialLinks';
import Logo from '../icons/logoFilled.svg';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="body-section">
                <a href="/">
                    <img src={ Logo } alt="logo" />
                    <h3 href="/">joeyharig.com</h3>
                </a>
                <SocialLinks />
            </div>
        </footer>
    );
};

export default Footer;
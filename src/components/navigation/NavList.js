import React from 'react';

import NavItem from  './NavItem';
// nav-list.scss includes the styles for NavItems
import './nav-list.scss';

const NavList = props => {
    return (
        <ul 
            className="nav-list"
            style={ props.style }
            onAnimationEnd={ props.onAnimationEnd }
            onClick={ props.navHandler }
        >
            <NavItem title="Home" link="/" />
            <NavItem title="Projects" link="/#projects" />
            <NavItem title="About Me" link="/#about-me" />
            <NavItem title="Contact Me" link="/#contact-me" />
        </ul>
    );
};

export default NavList;
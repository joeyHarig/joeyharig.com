import React from 'react';
import { useState } from 'react';

import Menu from './Menu';
import NavList from  './NavList';

import './nav.scss';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [menuColor, setMenuColor] = useState('');

    const navHandler = () => {
        setIsNavOpen(!isNavOpen);
    };

    const menuColorHandler = () => {
        if (window.scrollY >= window.innerHeight) {
            setMenuColor('colored');
        } else {
            setMenuColor('');
        }
    };

    window.addEventListener('scroll', menuColorHandler);

    return (
        <nav className={ `${isNavOpen ? "nav-open" : ''} ${ menuColor }`}>
            <Menu 
                isNavOpen={ isNavOpen }
                navHandler={ navHandler }
                menuColor={ menuColor }
            />
            <NavList isNavOpen={isNavOpen} />
        </nav>
    );
};

export default Nav;
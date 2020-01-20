import React from 'react';
import { useState } from 'react';

import Menu from './Menu';
import NavList from  './NavList';

import './nav.scss';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navHandler = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={ isNavOpen ? "nav-open" : '' }>
            <Menu 
                isNavOpen={isNavOpen}
                navHandler={ navHandler }
            />
            <NavList isNavOpen={isNavOpen} />
        </nav>
    );
};

export default Nav;
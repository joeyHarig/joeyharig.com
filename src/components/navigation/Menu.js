import React from 'react';
import { useState } from 'react';

import './menu.scss';

const Menu = props => {
    
    const [menuColor, setMenuColor] = useState('')

    const menuColorHandler = () => {
        console.log(window.innerHeight);
        if (window.scrollY >= window.innerHeight + 144) {
            setMenuColor('colored');
        } else {
            setMenuColor('');
        }
    };

    window.addEventListener('scroll', menuColorHandler);

    return (
        <div 
            id="menu" 
            onClick={ props.navHandler }
            className={ props.isNavOpen ? 'nav-open' : '' }
        >
            <div className={ `menu-line ${menuColor}` } id="menu-line-1"></div>
            <div className={ `menu-line ${menuColor}` }  id="menu-line-2"></div>
            <div className={ `menu-line ${menuColor}` }  id="menu-line-3"></div>
        </div>
    );
};

export default Menu;
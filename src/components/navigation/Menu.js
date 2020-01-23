import React from 'react';
import { useState } from 'react';

import './menu.scss';

const Menu = props => {
    return (
        <div 
            id="menu" 
            onClick={ props.navHandler }
            className={ props.isNavOpen ? 'nav-open' : '' }
        >
            <div className={ `menu-line ${props.menuColor}` } id="menu-line-1"></div>
            <div className={ `menu-line ${props.menuColor}` }  id="menu-line-2"></div>
            <div className={ `menu-line ${props.menuColor}` }  id="menu-line-3"></div>
        </div>
    );
};

export default Menu;
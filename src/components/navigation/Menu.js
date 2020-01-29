import React from 'react';

import './menu.scss';

const Menu = props => {
    return (
        <div 
            id="menu" 
            onClick={ props.navHandler }
            className={ props.isNavOpen ? "open" : "" }
        >
            <div className={ `menu-line ${props.menuColor}` } ></div>
            <div className={ `menu-line ${props.menuColor}` }  ></div>
            <div className={ `menu-line ${props.menuColor}` }  ></div>
        </div>
    );
};

export default Menu;
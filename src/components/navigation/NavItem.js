import React from 'react';

const NavItem = props => {
    return (
        <li className="nav-item">
            <a href={ props.link } >
                { props.title }
                <div className="underline"></div>
            </a>
        </li>
    );
};

export default NavItem;
import React, { useState, useEffect } from 'react';

import Menu from './Menu';
import NavList from  './NavList';

import './nav.scss';

const Nav = props => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [menuColor, setMenuColor] = useState('');

    const [shouldRender, setRender] = useState(isNavOpen);

    useEffect(() => {
        if (isNavOpen) setRender(true);
    }, [isNavOpen]);

    const onAnimationEnd = () => {
        if (!isNavOpen) setRender(false);
    };

    const navHandler = () => setIsNavOpen(!isNavOpen);

    const menuColorHandler = () => {
        if (window.scrollY >= window.innerHeight && props.route === 'home') {
            setMenuColor('colored');
        } else if (window.scrollY >= window.innerHeight/9 && props.route !== 'home') {
            setMenuColor('colored');
        } else {
            setMenuColor('');
        }
    };

    window.addEventListener('scroll', menuColorHandler);

    return (
        <div className="nav-container">
            <nav className={ `${ isNavOpen ? "open" : "" } ${ menuColor }`}>
                <Menu 
                    isNavOpen={ isNavOpen }
                    navHandler={ navHandler }
                    menuColor={ menuColor }
                />
                { shouldRender && (
                    <NavList 
                        style={{ animation: `${isNavOpen ? "navIn" : "navOut"} 0.6s` }}
                        onAnimationEnd={onAnimationEnd}
                        navHandler={ navHandler }
                    />
                )}
            </nav>
            { shouldRender && (
                <div
                    className="nav-background"
                    style={{ animation: `${isNavOpen ? "navIn" : "navOut"} 0.6s` }}
                    onAnimationEnd={onAnimationEnd}
                    onClick={ navHandler }
               />
            )}
        </div>
    );
};

export default Nav;
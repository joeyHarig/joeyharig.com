import React from 'react';

import './mouseAnimation.scss';

const MouseAnimation = () => {
    return (
        <a className="mouse-animation_container" href="#projects">
            <div className="animation-mouse animation-item">
                <div></div>
            </div>
            <div id="arrow1" className="animation-arrow animation-item"> </div>
            <div id="arrow2" className="animation-arrow animation-item"> </div>
            <div id="arrow3" className="animation-arrow animation-item"> </div>
      </a>
    );
};

export default MouseAnimation;
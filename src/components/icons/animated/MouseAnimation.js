import React from 'react';
import './mouseAnimation.scss';

const MouseAnimation = () => {
    return (
        <div className="mouse-animation_container">
            <div className="animation-mouse animation-item">
                <div></div>
            </div>
            <div id="arrow1" className="animation-arrow animation-item"> </div>
            <div id="arrow2" className="animation-arrow animation-item"> </div>
            <div id="arrow3" className="animation-arrow animation-item"> </div>
      </div>
    );
};

export default MouseAnimation;
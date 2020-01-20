import React from 'react';

import Icon from '../icons/Icon';
import './social-links.scss';

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a target="_blank" href="https://www.linkedin.com/in/joey-harig-256a05167/">
                <Icon icon="linkedin" />
            </a>
            <a target="_blank" href="https://github.com/joeyHarig">
                <Icon icon="github" />
            </a>
            <a target="_blank" href="https://dribbble.com/joey_harig">
                <Icon icon="dribble" />
            </a>
        </div>
    );
};

export default SocialLinks;
import React from 'react';
import SocialLink from './SocialLink';
import './social-links.scss';

const SocialLinks = () => {
    return (
        <div className="social-links">
            <SocialLink
                link="https://www.linkedin.com/in/joey-harig-256a05167/"
                icon="linkedin"
            />
            <SocialLink
                link="https://github.com/joeyHarig"
                icon="github"
            />
            <SocialLink
                link="https://dribbble.com/joey_harig"
                icon="dribble"
            />
        </div>
    );
};

export default SocialLinks;
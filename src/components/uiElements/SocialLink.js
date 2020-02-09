import React from 'react';
import ReactGA from 'react-ga';
import Icon from '../icons/Icon';

const SocialLink = props => {
    
    const trackGAEvent = () => {
        ReactGA.event({
            category: 'Link Click',
            action: `Visited ${props.icon} profile`
        });
    };

    return (
        <a 
            target="_blank"
            href={props.link}
            rel="noopener noreferrer"
            onClick={trackGAEvent}
        >
            <Icon icon={props.icon} />
        </a>
    );
};

export default SocialLink;
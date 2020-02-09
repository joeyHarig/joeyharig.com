import React from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Icon from '../icons/Icon';
import './button.scss';


const Button = props => {

    const {type, link } = props;

    const trackGAEvent = ReactGA.event({
        category: 'Button Click',
        action: `Visited ${link}`
    });

    let button;
    switch (type) {
        case 'View Code':
            button = 
                <a 
                    href={link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackGAEvent}
                >
                    <button className="button button--outlined button--with-icon">
                        <span>View Code</span>
                        <Icon icon="github" />
                    </button>
                </a>
            break;
        case 'Case Study':
            button = 
                <Link 
                    to={`/projects${link}`}
                    onClick={trackGAEvent}
                >
                    <button className="button button--filled">Case Study</button>
                </Link>;
            break;
        case 'View':
            button = 
                <Link 
                    to={link}
                    onClick={trackGAEvent}
                >
                    <button className="button button--filled">View</button>
                </Link>;
            break;
        case 'Visit Site':
            button =
            <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackGAEvent}
            > 
                    <button className="button button--filled">Visit Site</button>
            </a>
            break;
        default: button = <div/>;
    }
    return button;
};

export default Button;
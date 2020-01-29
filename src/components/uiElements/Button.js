import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../icons/Icon';
import './button.scss';


const Button = props => {

    let button;
    switch (props.type) {
        case 'View Code':
            button = 
                <a 
                    href={ props.link } 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="button--outlined button--with-icon">
                        <span>View Code</span>
                        <Icon icon="github" />
                    </button>
                </a>
            break;
        case 'Case Study':
            button = 
                <Link to={ `/projects${props.link}` }>
                    <button className="button--filled">Case Study</button>
                </Link>;
            break;
        case 'View':
            button = 
                <Link to={ props.link} >
                    <button className="button--filled">View</button>
                </Link>;
            break;
        case 'Visit Site':
            button =
            <a 
                href={ props.link }
                target="_blank"
                rel="noopener noreferrer"
            > 
                    <button className="button--filled">Visit Site</button>
            </a>
            break;
        default: button = <div/>;
    }
    return button;
};

export default Button;
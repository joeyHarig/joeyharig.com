import React from 'react';
import Icons from './Icons';

const Icon = props => {
    const { icon } = props;
    
    const paths = () => {
        let pathTags =[];
        for (let i = 0; i <= Icons[icon].length; i++) {
            pathTags.push(
                <path key={ i } d={Icons[icon][i]}></path>
            );
        }
        return pathTags;
    };

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
            alt={icon}
        >
            { paths() }
        </svg>
    );
};

export default Icon;
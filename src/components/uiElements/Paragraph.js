import React from 'react';

import './paragraph.scss'

const Paragraph = props => {
    return (
        <p className={ `${props.size} body-paragraph` }> 
            { props.content }
        </p>
    );
};

export default Paragraph;
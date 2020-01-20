import React from 'react';

import './experience-item.scss';

const ExperienceItem = props => {
    return (
        <div class="experience-item">
            <h1>{ props.title }</h1>
            <h2>
                <span class="company">{ props.company }</span>
                <span class="duration">{ props.duration }</span>
            </h2>
            <p>{ props.description }</p>
        </div>
    );
};

export default ExperienceItem;
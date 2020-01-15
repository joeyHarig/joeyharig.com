import React from 'react';
//import { Link } from 'react-router-dom';

import Button from './Button';
import Icon from '../icons/Icon';

import './project-card.scss';

const ProjectCard = props => {
    
    return (
        <div className="project_card_container">
            <img className="project_card_photo" alt={ props.title }></img>
            <div className="project_card_info_container">
                <h1 className="info_item">{ props.title }</h1>
                <h2 className="info_item">{ props.contribution }</h2>
                <p className="info_item">{ props.description }</p>
                <div className="project_card_tools_container">
                    <h3>Tools |</h3>
                    { props.tools.map(tool => (
                        <Icon 
                            key={tool }
                            icon={ tool } 
                        />
                    )) }
                </div>
                <div className="project_card_button_container">
                    { props.buttons.map(button => (
                        <Button
                            key={ button.type }
                            type={ button.type }
                            link={ button.link } 
                        />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
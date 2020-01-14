import React from 'react';
import { Link } from 'react-router-dom';

import './project-card.scss';

const ProjectCard = props => {
    return (
        <div class="project_card_container">
            <img class="project_card_photo"></img>
            <div class="project_card_info_container">
                <h1 class="info_item">BLU360</h1>
                <h2 class="info_item">UI / UX / IA</h2>
                <p class="info_item">A construction app for form / permit submissions and information sharing</p>
                <div class="project_card_tools_container">
                    <h3 class="project_card_tools_title ">Tools |</h3>
                    <img />
                    <img />
                    <img />
                </div>
                <div class="project_card_button_container">
                    <button class="button button--filled">Visit Site</button>
                    <button class="button button--outlined button--with-icon">View Code
                        <img class="project_card_button_icon icon-dark"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
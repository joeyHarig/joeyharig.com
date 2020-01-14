import React from 'react';

import ProjectCard from '../uiElememnts/ProjectCard';
import logoFilled from '../icons/logoFilled.svg';
import './projects.scss';

const Projects = () => {
    return (
        <section id="projects">
            <ProjectCard 
                title="BLU360"
                subtitle="UI / UX / Dev"
                description="A construction app for form / permit submissions and information sharing"
                tools={[
                    "adobeXD",
                    "react",
                    "sass"
                ]}
                buttons={[
                    {
                        type: 'Case Study',
                        link: 'blu360'
                    },
                ]}
            />
        </section>
    );
};

export default Projects;
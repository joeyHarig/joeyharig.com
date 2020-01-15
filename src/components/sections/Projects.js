import React from 'react';

import ProjectCard from '../uiElements/ProjectCard';
import Header from '../uiElements/Header';

//import logoFilled from '../icons/logoFilled.svg';
import './projects.scss';
import '../uiElements/grid.scss';

const Projects = props => {
    return (
        <section id="projects">
            <Header 
                title="Selected Projects"
                subtitle="2017 - 2020"
            />
            <div className="grid">
                <ProjectCard 
                    title="BLU360"
                    contribution="UI / UX / Dev"
                    description="A construction app for form / permit submissions and information sharing"
                    tools={[
                        "adobeXD",
                        "react",
                        "sass"
                    ]}
                    buttons={[
                        {
                            type: 'Case Study',
                            link: '/blu360'
                        },
                    ]}
                />
                <ProjectCard 
                    title="What The Help"
                    contribution="UI / UX / Animation"
                    description="A chore app for college kids on a budget to get work done around the house"
                    tools={[
                        "adobeXD",
                        "adobePhotoshop",
                        "adobeAfterEffects"
                    ]}
                    buttons={[
                        {
                            type: 'Case Study',
                            link: '/whatthehelp'
                        },
                    ]}
                />
                <ProjectCard 
                    title="Useless Certifications"
                    contribution="Front End Web Development"
                    description="A website to certify you in the most ridiculous things"
                    tools={[
                        "react",
                        "react",
                        "adobeIllustrator"
                    ]}
                    buttons={[
                        {
                            type: 'Visit Site',
                            link: 'https://uselesscertifications.com'
                        },
                        {
                            type: 'View Code',
                            link: 'https://www.github.com'
                        }
                    ]}
                />
                <ProjectCard 
                    title="Pig"
                    contribution="Front End Web Development"
                    description="A virtual rendition of the dice game 'Pig' with a CPU opponent"
                    tools={[
                        "react",
                        "sass"
                    ]}
                    buttons={[
                        {
                            type: 'Visit Site',
                            link: 'https://uselesscertifications.com'
                        },
                        {
                            type: 'View Code',
                            link: 'https://www.github.com'
                        }
                    ]}
                />
            </div>
        </section>
    );
};

export default Projects;
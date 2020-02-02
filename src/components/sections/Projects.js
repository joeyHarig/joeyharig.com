import React from 'react';

import ProjectCard from '../uiElements/ProjectCard';
import Header from '../uiElements/Header';

import './projects.scss';
import '../uiElements/section-grid.scss';

// images
import Blu360Cover from'../../photos/blu360-cover.png';
import WTHCover from'../../photos/what-the-help-cover.png';
import DesignCover from'../../photos/design-cover.png';
import TraptrisCover from'../../photos/traptris-cover.png';
import UCCover from'../../photos/useless-certifications-cover.png';
import PigCover from'../../photos/pig-cover.png';

const Projects = props => {
    return (
        <section id="projects">
            <Header 
                title="SELECTED PROJECTS"
                subtitle="2017 - 2020"
            />
            <div className="section-grid body-section">
                <ProjectCard 
                    title="BLU360"
                    contribution="UI / UX / Dev"
                    image={Blu360Cover}
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
                    image={WTHCover}
                    description="A chore app for college kids on a budget to get work done around the house"
                    tools={[
                        "adobeXD",
                        "adobeIllustrator",
                        "adobePhotoshop",
                        "adobeAfterEffects"
                    ]}
                    buttons={[
                        {
                            type: 'Case Study',
                            link: '/what_the_help'
                        },
                    ]}
                />
                <ProjectCard 
                    title="Useless Certifications"
                    contribution="Front End Web Dev"
                    image={UCCover}
                    description="A website to certify you in the most ridiculous things"
                    tools={[
                        "adobeIllustrator",
                        "javascript"
                    ]}
                    buttons={[
                        {
                            type: 'Visit Site',
                            link: 'https://uselesscertifications.com'
                        },
                        {
                            type: 'View Code',
                            link: 'https://github.com/joeyHarig/uselesscertifications'
                        }
                    ]}
                />
                <ProjectCard 
                    title="Pig"
                    contribution="Front End Web Dev"
                    image={PigCover}
                    description="A virtual rendition of the dice game 'Pig' with a CPU opponent"
                    tools={[
                        "javascript",
                        "sass"
                    ]}
                    buttons={[
                        {
                            type: 'Visit Site',
                            link: 'https://joeyharig.github.io/pig/'
                        },
                        {
                            type: 'View Code',
                            link: 'https://github.com/joeyHarig/pig'
                        }
                    ]}
                />
                <ProjectCard 
                    title="Traptris"
                    contribution="Development"
                    image={TraptrisCover}
                    description="A version of Tetris coded in python using a Java gui library for the UI"
                    tools={[
                        "python"
                    ]}
                    buttons={[
                        {
                            type: 'View Code',
                            link: 'https://github.com/joeyHarig/traptris'
                        }
                    ]}
                />
                <ProjectCard 
                    title="Graphic Design"
                    contribution="Graphic Design"
                    image={DesignCover}
                    description="A collection of my designs from school and client work"
                    tools={[
                        "adobeIllustrator",
                        "adobePhotoshop"
                    ]}
                    buttons={[
                        {
                            type: 'View',
                            link: '/design_gallery'
                        },
                    ]}
                />
            </div>
        </section>
    );
};

export default Projects;

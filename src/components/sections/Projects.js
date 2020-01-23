import React from 'react';

import ProjectCard from '../uiElements/ProjectCard';
import Header from '../uiElements/Header';

import './projects.scss';
import '../uiElements/section-grid.scss';

// images
import Blu360Cover from'../../photos/blu360-cover.png';
import WTHCover from'../../photos/what-the-help-cover.png';
import BoldLifeCover from'../../photos/bold-life-cover.png';
import TraptrisCover from'../../photos/traptris-cover.png';
import UCCover from'../../photos/useless-certifications-cover.png';
import PigCover from'../../photos/pig-cover.png';

const Projects = props => {
    return (
        <section id="projects">
            {/* <img 
                className="about-me-background-logo" 
                src={Logo} 
                alt="logo"
            /> */}
            <Header 
                title="Selected Projects"
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
                    contribution="Front End Web Dev"
                    image={UCCover}
                    description="A website to certify you in the most ridiculous things"
                    tools={[
                        "html",
                        "css",
                        "javascript",
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
                    contribution="Front End Web Dev"
                    image={PigCover}
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
                <ProjectCard 
                    title="Traptris"
                    contribution="Development"
                    image={TraptrisCover}
                    description="A version of Tetris in python while using a Java gui library for the display"
                    tools={[
                        "python"
                    ]}
                    buttons={[
                        {
                            type: 'View Code',
                            link: 'https://www.github.com'
                        }
                    ]}
                />
                <ProjectCard 
                    title="Bold Life Apparel"
                    contribution="Graphic Design"
                    image={BoldLifeCover}
                    description="A collection of logo and print designs for the Bold Life brand"
                    tools={[
                        "adobeIllustrator",
                        "adobePhotoshop"
                    ]}
                    buttons={[
                        {
                            type: 'Case Study',
                            link: '/bold-life-apparel'
                        },
                    ]}
                />
            </div>
        </section>
    );
};

export default Projects;
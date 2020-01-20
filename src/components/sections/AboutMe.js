import React from 'react';

import Logo from '../icons/logoFilled-red.svg';
import Paragraph from '../uiElements/Paragraph';
import ExperienceItem from '../uiElements/ExperienceItem';

import './about-me.scss';
import '../uiElements/section-grid.scss';

const AboutMe = () => {
    return (
        <section id="about-me" className="body-section">
            <h1 className="about-me-title">A Little <b>About Me</b></h1>
            <Paragraph 
                size="half"
                content="I am a designer who specializes in UI, UX and front-end web development. I studied graphic design, web development and marketing at the University of Colorado, graduating in May 2020."
            />
            <Paragraph 
                size="half"
                content="I am a designer who specializes in UI, UX and front-end web development. I studied graphic design, web development and marketing at the University of Colorado, graduating in 2020. I bring a marketing mentality to every site I design and build."
            />
            <h1 className="about-me-title top-margin">My <b>Experience</b></h1>
            <div className="section-grid">
                <ExperienceItem 
                    title="Digitl Media Intern"
                    company="Mortenson"
                    duration="May 2019 - Present"
                    description="I designed, developed and presented new software using AdobeXD, React.js, and Scss. I also maintained the public facing Sitecore website and animated videos for national award submissions."
                />
                <ExperienceItem 
                    title="UX / Video Animation Intern"
                    company="Chipper by Cramfighter"
                    duration="Jan - Aug 2019"
                    description="I reported on UX research that I conducted through surveys, focus groups, and user interviews. I also animated promotional / instructional videos for Instagram and YouTube."
                />
                <ExperienceItem 
                    title="Graphic Designer"
                    company="Bold Life Apparel"
                    duration="2017 - 2019"
                    description="I first fell in love with design making the graphics for Bold Life brand apparel and custom orders. Additionally, I ran the social media accounts and designed the eCommerce site."
                />
                <ExperienceItem 
                    title="Percussion Instructor"
                    company="Boulder Valley School District"
                    duration="2017 - Present"
                    description="In the evenings, I love teaching at Fairview Highs School where I run after school percussion rehersals, design shows, and give private lesson."
                />
            </div>
            <img 
                className="about-me-background-logo" 
                src={Logo} 
                alt="logo"
            />
        </section>
    );
};

export default AboutMe;
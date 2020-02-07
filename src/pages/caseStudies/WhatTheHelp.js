import React from 'react';

import Header from '../../components/uiElements/Header';
import CoverPhoto from '../../photos/what-the-help-cover.png';
import WTHScreens from '../../photos/wth-screens.png';
import WTHShirts from '../../photos/wth-shirts.png';
import WTHMerch from '../../photos/wth-merch.png';
import Video from '../../photos/wth-video.mp4'
import CaseStudySection from '../../components/sections/CaseStudySection';

const WhatTheHelp = () => {   
    
    return (
        <div>
            <Header 
                title="What The Help"
                subtitle="UI / UX / Animation"
            />
            <section className="body-section">
                <CaseStudySection 
                    type= 'video'
                    vid={ Video }

                /> 
                <CaseStudySection 
                    type='txt'
                    content={
                        "What The Help provides young adults with a way of finding help to do their chores and house tasks. Using Adobe XD, Illustrator and After Effects, I designed a Logo, a UI and a promotional video for What The Help that reflect the youthful and fun brand. I chose to use the color Yellow to portray happiness, value, and youthfulness. The main selling point of the app is the fact that the help is local and trustworthy, so the UI centers around the map."
                    }
                />
                <CaseStudySection 
                    type='imgs'
                    img={[
                        CoverPhoto,
                        WTHScreens, 
                        WTHShirts, 
                        WTHMerch
                    ]}
                    alt={[
                        'What The Help', 
                        'What The Help UI', 
                        'What The Help Shirts', 
                        'What The Help Merch'
                    ]}
                />
                <CaseStudySection 
                    type='txt'
                    content={
                        "In addition, I mocked up some merchandise in Photoshop to post on social media. What The Help won the CU Leeds School of Business Product Strategy Challenge and is currently in the process of finding investors."
                    }
                />
            </section>
        </div>
    );
};

export default WhatTheHelp;

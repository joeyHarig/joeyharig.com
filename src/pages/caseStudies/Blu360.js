import React from 'react';

import Header from '../../components/uiElements/Header';
import CoverPhoto from '../../photos/blu360-cover.png';
import Blu360Icon from '../../photos/blu360-icon.png';
import CaseStudySection from '../../components/sections/CaseStudySection';

const Blu360 = () => {   
    
    return (
        <div>
            <Header 
                title="Blu360"
                subtitle="UI / UX / Dev"
            />
            <section className="body-section">
                <CaseStudySection 
                    type='txt'
                    content={
                        "The biggest priorities in the construction industry are safety, efficiency, and accuracy. An excess of paperwork and a lack of awareness for safety standards lead to lost time and material. Blu360 is a web app designed to increase awareness, maximize efficiency, and improve communications both on and off of the work site."
                    }
                />
                <CaseStudySection
                    type='sub-header'
                    content="Challenges"
                />
                <CaseStudySection 
                    type='img-txt'
                    img={ [CoverPhoto] }
                    alt={['img']}
                    content={
                        "The largest issue faced when making an enterprise application for non-salary employees was controlling user access. Craft workers didn’t have Microsoft or Google accounts to use as a way of authentication. Instead,  accounts needed to be managed internally. "
                    }
                />
                <CaseStudySection 
                    type='txt'
                    content={
                        "Another challenge was making the application bilingual. 60% of the users spoke spanish, but a majority of the content was written in english. To solve this problem, we used the Google Translate API. Additionally, some of our users were either less educated or not highly experienced with similar technologies. The application need to be highly visual and easy to navigate."
                    }
                />
                <CaseStudySection
                    type='sub-header'
                    content="Process"
                />
                <CaseStudySection 
                    type='imgs'
                    img={[
                        Blu360Icon,
                        CoverPhoto, 
                        CoverPhoto, 
                        CoverPhoto
                    ]}
                    alt={[
                        'img', 
                        'img', 
                        'img', 
                        'img'
                    ]}
                />
                <CaseStudySection 
                    type='txt'
                    content={
                        "The final design ended up looking clean, modern, and simple to place focus on usability and efficiency. The front end was written using React.js and Scss for maximum scalability.  Different components could be individually rendered and re-rendered to reduce the size of network requests on work sites where cellular data and wifi are limited."
                    }
                />
            </section>
        </div>
    );
};

export default Blu360;
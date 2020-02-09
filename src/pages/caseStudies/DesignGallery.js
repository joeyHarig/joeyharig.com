import React from 'react';
import ReactGA from 'react-ga';
import Header from '../../components/uiElements/Header';
import HorrorFilmFest from '../../photos/horror-film-fest.png';
import HighNote from '../../photos/colorad-symphony-highnote-series.png';
import CS1 from '../../photos/colorado-symph1.png';
import CS2 from '../../photos/colorado-symph2.png';
import EX1 from '../../photos/expressive1.png';
import EX2 from '../../photos/expressive2.png';
import EX3 from '../../photos/expressive3.png';
import EX4 from '../../photos/expressive4.png';
import Lion from '../../photos/lion.png';
import Bear from '../../photos/bear.png';
import PolarBear from '../../photos/keeping-it-chill.png';
import Colorado from '../../photos/colorado.png';


import CaseStudySection from '../../components/sections/CaseStudySection';

const DesignGallery = () => {   
    
    // Log pageview in GA
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    return (
        <div>
            <Header 
                title="Design Gallery"
                subtitle=""
            />
            <section className="body-section">
                <CaseStudySection 
                    type='imgs'
                    img={[
                        HorrorFilmFest,
                        HighNote, 
                        CS1, 
                        CS2
                    ]}
                    alt={[
                        'Horror Film Festival Poster', 
                        'Symphony Poster', 
                        'Symphony Mailer', 
                        'Symphony Mailer Back'
                    ]}
                />
                <CaseStudySection 
                    type='imgs'
                    img={[
                        EX1,
                        EX2, 
                        EX3, 
                        EX4
                    ]}
                    alt={[
                        'Horror Film Festival Poster', 
                        'Symphony Poster', 
                        'Symphony Mailer', 
                        'Symphony Mailer Back'
                    ]}
                />
                <CaseStudySection 
                    type='imgs'
                    img={[
                        Colorado,
                        Lion, 
                        PolarBear, 
                        Bear
                    ]}
                    alt={[
                        'Colorado Logo', 
                        'Lion Logo', 
                        'Polar Bear Logo', 
                        'Bear Logo'
                    ]}
                />
            </section>
        </div>
    );
};

export default DesignGallery;
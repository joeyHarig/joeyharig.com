import React from 'react';

import './case-study-section.scss';

const CaseStudtSection = props => {
    
    let section;
    
    switch (props.type) {
        case 'sub-header':
            section = 
                <h2 className="sub-header case-study-section" >
                    { props.content }
                </h2>
            break;
        case 'img-txt' :
            section = 
                <div className={`${props.type} case-study-section`}>
                    <img src={ props.img[0] } alt={ props.alt[0] } />
                    <p>{ props.content }</p>
                </div>
            break;
        case 'imgs' :
            section = 
                <div className={`${props.type} case-study-section`}>
                    <img src={ props.img[0] } alt={ props.alt[0] } />
                    <img src={ props.img[1] } alt={ props.alt[1] } />
                    <img src={ props.img[2] } alt={ props.alt[2] } />
                    <img src={ props.img[3] } alt={ props.alt[3] } />
                </div>
            break;
        case 'txt' :
            section = 
                <div className={`${props.type} case-study-section`}>
                    <p>{ props.content }</p>
                </div>
            break;
        case 'video' :
            section = 
                <div className={`${props.type} case-study-section`}>
                    <video
                        src={props.vid}
                        controls
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            break;
        default: section = <div />
    }
    return section;
};

export default CaseStudtSection;

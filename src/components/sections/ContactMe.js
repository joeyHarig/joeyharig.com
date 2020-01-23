import React from 'react';

import ContactForm from '../formElements/ContactForm';
import SocialLinks from '../uiElements/SocialLinks';

import './contact-me.scss';

const ContactMe = () => {
    return (
        <section id="contact-me">
            <div className="body-section">
                <span>
                    <h1>CONTACT <b>ME</b></h1>
                    <ContactForm />
                </span>
                <SocialLinks />
            </div>
        </section>
    );
};

export default ContactMe;
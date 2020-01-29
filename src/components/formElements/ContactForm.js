import React from 'react';
import { useState } from 'react';

import Input from './Input';
import './contact-form.scss';

const ContactForm = () => {
    
    const [isFormValid, setIsFormValid] = useState(
        {
            inputs: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
            form: false
        }
    );

    const formValidationHandler = (input) => {
        
    };



    // const [isNameValid, setIsNameValid] = useState('');
    // const [isEmailValid, setIsEmailValid] = useState('');
    // const [isSubjectValid, setIsSubjectValid] = useState('');
    // const [isMessageValid, setIsMessageValid] = useState('');
    
    return (
        <form className="contact-form" netlify>
            <Input
                type="text"
                name="name"
                placeholder="Full Name"
            />
            <Input
                type="text"
                name="email"
                placeholder="Email"
            />
            <Input
                type="text"
                name="subject"
                placeholder="Subject"
            />
            <Input
                type="textarea"
                name="message"
                placeholder="Message"
            />
            <Input
                type="submit"
                name="submit"
            />
        </form>
    );
};

export default ContactForm;
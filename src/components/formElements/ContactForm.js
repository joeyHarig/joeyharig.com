import React, { useCallback, useReducer } from 'react';
import { 
    VALIDATOR_REQUIRE, 
    VALIDATOR_EMAIL, 
    VALIDATOR_MINLENGTH
} from './validators';
import ReactGA from 'react-ga';
import Input from './Input';
import './contact-form.scss';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            }
        default:
            return state;
    }
};

const ContactForm = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            name: {
                value: '',
                isValid: false
            },
            email: {
                value: '',
                isValid: false
            },
            subject: {
                value: '',
                isValid: false
            },
            message: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: id !== 'submit' ? 'INPUT_CHANGE' : '',
            inputId: id,
            isValid: isValid,
            value: value
        });
    }, []);

    const trackGAEvent = ReactGA.event({
        category: 'Form Submission',
        action: 'Contact Form Submitted'
    });

    return (
        <form 
            className="contact-form"
            name="contact"
            method="post"
            action="/"
        >
            <input 
                type="hidden" 
                name="form-name" 
                value="contact" 
            />
            <Input
                type="text"
                id="name"
                validators={[VALIDATOR_REQUIRE()]}
                placeholder="Full Name"
                errorText="Please enter a valid name"
                onInput={ inputHandler }
            />
            <Input
                type="text"
                id="email"
                validators={[
                    VALIDATOR_REQUIRE(),
                    VALIDATOR_EMAIL()
                ]}
                placeholder="Email"
                errorText="Please enter a valid email"
                onInput={ inputHandler }
            />
            <Input
                type="text"
                id="subject"
                validators={[VALIDATOR_REQUIRE()]}
                placeholder="Subject"
                errorText="Please enter a valid subject line"
                onInput={ inputHandler }
            />
            <Input
                type="textarea"
                id="message"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                placeholder="Message"
                errorText="Please enter a valid message"
                onInput={ inputHandler }
            />
            <button
                type="submit"
                disabled={ !formState.isValid }
                className={ `${formState.isValid ? "valid" : "disabled"} input_submit` }
                onClick={trackGAEvent}
            >
                Send
            </button>
        </form>
    );
};

export default ContactForm;
import React from 'react';

import './input.scss';
import Icon from '../icons/Icon';

const Input = props => {
    if (props.type === 'text') {
        return (
            <div className="input-container">
                <label className={!props.validated ? 'invalid' : '' }>{ props.invalidLabel }</label>
                <input
                    className={`${props.validated ? 'valid' : 'invalid'} input_text`} 
                    type="text" 
                    name={ props.name } 
                    placeholder={ props.placeholder } 
                    autoComplete="off"
                />
            </div>
        );
    }
    else if (props.type === 'textarea') {
        return (
            <div className="input-container">
                <label className={!props.validated ? 'invalid' : '' }>{ props.invalidLabel }</label>
                <textarea
                    className={`${props.validated ? 'valid' : ''} ${!props.validated ? 'invalid' : '' } input_textarea`}  
                    type="text" 
                    name={ props.name } 
                    placeholder={ props.placeholder }
                    rows="10"
                    autoComplete="off"
                />
            </div>
        );
    }
    else if (props.type === 'submit') {
        return (
            <div className="input-container">
                <input
                    className="input_submit"
                    type="submit"
                    name={ props.name } 
                >
                    <Icon icon="react" />    
                </input>
            </div>
        );
    }
};

export default Input;
import React, { useReducer, useEffect } from 'react';
import { validate } from './validators';
import './input.scss';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE' :
            return {
                ...state,
                value: action.val,
                hasChanged: true,
                isValid: validate(action.val, action.validators)
            };
        case 'BLUR' :
            return {
                ...state,
                hasChanged: true
            };
        default :
            return state;
    }
};

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer,{
        value: '',
        hasChanged: false,
        isValid: false
    });

    const { id, onInput, errorText  } = props;
    const { value, isValid, hasChanged } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            state: inputState,
            val: event.target.value,
            validators: props.validators
        });
    };

    const blurHandler = () => {
        dispatch({
            type: 'BLUR'
        });
    };

    let element;

    switch (props.type) {
        case 'text' : 
            element =
                <input
                    className={`${isValid ? 'valid' : ''}  input_text`} 
                    type={ id } 
                    name={ id } 
                    placeholder={ props.placeholder } 
                    onChange={ changeHandler }
                    onBlur={ blurHandler }
                    value={ value }
                />
            break;
        case 'textarea' :
            element = 
                <textarea
                    className={`${isValid ? 'valid' : ''} input_textarea`}  
                    type={ id } 
                    name={ id } 
                    placeholder={ props.placeholder }
                    rows="10"
                    onChange={ changeHandler }
                    value={ value }
                />
            break;
        case 'submit' : 
            element =
                <button
                    disabled={ props.isFormValid ? "valid" : "disabled" }
                    className={ `${props.isFormValid ? "valid" : "disabled"} input_submit` }
                    type="submit"
                    
                    onClick={ props.onClick }
                > 
                    Send
                </button>
            break;
        default : element = <div/>
    }
    
    return (
        <div className="input-container">
            { element }
            { !isValid & hasChanged ? (
                    <label className="label-invalid" >
                        { errorText }
                    </label>
                ) : (
                    null
                )
            }
        </div>
    );
};

export default Input;
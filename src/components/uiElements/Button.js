import React from 'react';


import './button.scss'



const Button = props => {
    
    const button = () => {
        switch (props.button.type) {
            case 'View Code':
                return <button>{ props.button }</button>
        }
    };
    
    return ( 
        { button() }
    );
};

export default Button;
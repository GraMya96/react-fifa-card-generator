import React from 'react';
import './button.scss';
import { Link } from 'react-router-dom';

const Button = ( { children, elementType, color, background, clickHandler, ...otherProps } ) => {

    const buttonStyle = {
        color: color,
        backgroundColor: background,
    }

    let htmlElement = null;

    if( elementType === 'a' ) {
        htmlElement = (
            <Link
                style = { buttonStyle }
                className = { `button ${ otherProps.otherClass ? otherProps.otherClass : null }` }
                to = { clickHandler }>
                { children }
            </Link>
        )
    }
    else if ( elementType === 'button' )  {
        htmlElement = (
            <button
                style = { buttonStyle }
                className = { `button ${ otherProps.otherClass ? otherProps.otherClass : null }` }
                onClick = { clickHandler }>
                { children }
            </button>
        )
    }

    return htmlElement;
}


export default Button;
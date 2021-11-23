import React from 'react';
import "./input.scss";


const Input = ({ key, elementType, hasLabel, labelText, options, isValid, errorMessage, ...otherProps }) => {
        let inputElement = null;

        if ( elementType === "input" ) {
            inputElement = (
                <input
                    { ...otherProps }
                    className = {`input ${ !isValid && 'invalid' }`}
                />
            );
        }
        if ( elementType === "select" ) {
            inputElement = (
                <select
                    { ...otherProps }
                    className = "select"
                    id = { key }>

                        { options && options.map( singleOption => {
                            return <option
                                        key = { singleOption.value }
                                        value = { singleOption.value }>
                                        { singleOption.name }
                                    </option>
                        } ) }
                </select>
            );
        }

        return (
            <>
                { hasLabel
                    ?   <div className="withLabelDiv">
                            <label htmlFor={ key }>{ labelText }</label>
                            { inputElement }
                            { !isValid && errorMessage ? <p className="error-message">{ errorMessage }</p> : null }
                        </div>

                    :  (
                        inputElement,
                        !isValid && errorMessage ? <p className="error-message">{ errorMessage }</p> : null
                    )
                }
            </>
        )
}


export default Input;
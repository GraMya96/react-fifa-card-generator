/* Dependencies: */
import React, { useState, useReducer } from 'react';
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { useHistory } from 'react-router';

/* SCSS/CSS: */
import './create-card.scss';

/* Other Components: */
import CreateCardForm from '../../components/card-form/card-form';
import Card from '../../components/card/card';
import Button from '../../components/UI/button/button';

/* Other .js files: */
import db from '../../firebase/firebase.config';

/* Reducers */
import formReducer from '../../reducers/form-reducer';

/* Images */
import create_card_img from '../../img/background-blue.jpg'


const PAGE_STYLE = {
    backgroundImage: `url('${create_card_img}')`,
}

const initialFormState = [
    { field: 'overallValue', type: 'number', value: null, isValid: true },
    { field: 'position', type: 'select', value: 'def', isValid: true },
    { field: 'name', type: 'text', value: '', isValid: true },
    { field: 'pace', type: 'number', value: '', isValid: true },
    { field: 'shot', type: 'number', value: '', isValid: true },
    { field: 'passing', type: 'number', value: '', isValid: true },
    { field: 'dribbling', type: 'number', value: '', isValid: true },
    { field: 'defence', type: 'number', value: '', isValid: false },
    { field: 'physique', type: 'number', value: '', isValid: true }
];

const CreateCard = props => {

    const [ formState, dispatch ] = useReducer( formReducer, initialFormState );
    const [ cardColor, setCardColor ] = useState( '#e9cc74' );
    const [ isFormSuccessful, setIsFormSuccessful ] = useState( false );

    const history = useHistory();

        /* On Change Method with Reducer action */
        const onChangeHandler = ( e ) => {

            let value = e.target.value;
            let type = e.target.inputMode;

            const checkValidity = ( value, type ) => {
                if( value !== null && value.length > 1 ) {
                    if( type === 'numeric' ) {
                        return !isNaN(value);
                    }
                    else {
                        return true;
                    }
                }

                return false;
            }
            let isInputValid = checkValidity( value, type );

            dispatch({
                type: "ON_CHANGE",
                field: e.target.name,
                payload: value,
                checkValidity: isInputValid
            })
        }

        /* Back to Default Color Method */
        const backToDefaultColor = ( e ) => {
            e.preventDefault();

            setCardColor( '#e9cc74' );
        }

        /* Submit Method with Reducer action */
        const submitCardHandler = async ( e ) => {
            e.preventDefault();

            const formIsValid = formState.every( singleInput => singleInput.isValid === true
                && singleInput.value !== ''
                && singleInput.value !== null );

            if( formIsValid ) {

                const cardsRef = collection( db, "cards" );
                const objectDataToSend = {};

                formState.forEach( ( singleObj, i ) => {
                    let key = singleObj.field;
                    let valueToShow = Array.isArray(singleObj.value) /* if we're talking
                        about an input number (isArray because we did the e.target.value.match
                        not to show the text on the card UI) ... */
                        ? singleObj.value[0]
                        : singleObj.value;

                    objectDataToSend[ key ] = valueToShow;
                } );

                objectDataToSend.textColor = cardColor;

                await setDoc( doc( cardsRef, formState[2].value ), {
                    ...objectDataToSend
                } );

                setIsFormSuccessful( true );

                setTimeout(() => {
                    history.replace('/all-cards');
                }, 1000);

            }
            else {
                dispatch({
                    type: 'SHOW_SUBMIT_ERROR'
                });
            }
        }

    return (
        <div className='page-create-card p-relative'
             style={ PAGE_STYLE }>

            <Button
                elementType="a"
                color="#fff"
                clickHandler="/all-cards"
                background="red">See All the Cards &#8594;</Button>

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Create your Card</h1>
                    </div>
                </div>

                <div className="row d-flex align-items-center">
                    <div className="col-12 col-xl-5 d-flex flex-column justify-content-center justify-content-xl-start mb-5 mb-xl-0">
                        <CreateCardForm
                            allInputsArray = { formState }
                            defaultTextColorHandler = { backToDefaultColor }
                            textColor = { cardColor }
                            onChange = { onChangeHandler }
                            changeColor = { setCardColor }
                            submit = { submitCardHandler } />

                        { isFormSuccessful && <span className="successful-message mt-3">Your Card was created successfully!</span> }
                    </div>
                    <div className="col-12 col-xl-5 offset-xl-1 d-flex justify-content-center justify-content-xl-end">

                        {/* Preview Card */}
                        <Card
                            textColor = { cardColor }
                            value = { formState[0].value }
                            position = { formState[1].value }
                            name = { formState[2].value }
                            pac = { formState[3].value }
                            sho = { formState[4].value }
                            pas = { formState[5].value }
                            dri = { formState[6].value }
                            def = { formState[7].value }
                            phy = { formState[8].value }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCard;


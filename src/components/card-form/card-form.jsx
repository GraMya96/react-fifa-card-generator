/* Dependencies: */
import React from 'react';
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.js";

/* SCSS/CSS: */
import './card-form.scss';

/* Other Components: */
import Input from '../UI/input/input';
import Button from '../UI/button/button';

const POSITION_VALUES = [
    { name: 'Defender', value: 'def' },
    { name: 'Midfielder', value: 'mid' },
    { name: 'Forward', value: 'for' }
];

const CreateCardForm = ( { allInputsArray, defaultTextColorHandler, textColor, onChange, changeColor, submit } ) => {


    return (
        <form
            method = 'POST'
            className = "card-form">

            <Input
                elementType = "input"
                name = 'overallValue'
                id = 'overallValue'
                hasLabel
                required
                errorMessage = "Please Insert a 2-digit Number"
                onKeyUp = { onChange }
                pattern = "([0-9]{3})"
                type = "text"
                inputMode="numeric"
                maxLength = "2"
                min = "50"
                max = "99"
                labelText = 'Overall Value'
                onChange = { onChange }
                isValid = { allInputsArray[0].isValid }
            />
            <Input
                elementType = "select"
                name = 'position'
                id = 'position'
                required
                hasLabel
                labelText = 'Position'
                onChange = { onChange }
                isValid = { allInputsArray[1].isValid }
                options = { POSITION_VALUES }
            />
            <Input
                elementType = "input"
                name = 'name'
                errorMessage = "Please Insert a Name"
                id = 'name'
                required
                maxLength = "13"
                hasLabel
                labelText = 'Name'
                onChange = { onChange }
                isValid = { allInputsArray[2].isValid }
            />

            <div className="card-values">
                <div className="row">
                    <div className="col-6">
                        <Input
                            elementType = "input"
                            type = "text"
                            onKeyUp = { onChange }
                            maxLength = "2"
                            errorMessage = "Please Insert a 2-digit Number"
                            pattern = "([0-9]{3})"
                            inputMode="numeric"
                            min = "50"
                            id = 'pace'
                            required
                            max = "99"
                            name = 'pace'
                            hasLabel
                            labelText = 'Pace'
                            onChange = { onChange }
                            isValid = { allInputsArray[3].isValid }
                        />
                        <Input
                            elementType = "input"
                            type = "text"
                            onKeyUp = { onChange }
                            maxLength = "2"
                            errorMessage = "Please Insert a 2-digit Number"
                            pattern = "([0-9]{3})"
                            inputMode="numeric"
                            min = "50"
                            max = "99"
                            required
                            name = 'shot'
                            id = 'shot'
                            hasLabel
                            labelText = 'Shot'
                            onChange = { onChange }
                            isValid = { allInputsArray[4].isValid }
                        />
                        <Input
                            elementType = "input"
                            type = "text"
                            errorMessage = "Please Insert a 2-digit Number"
                            onKeyUp = { onChange }
                            pattern = "([0-9]{3})"
                            maxLength = "2"
                            inputMode="numeric"
                            min = "50"
                            max = "99"
                            required
                            name = 'passing'
                            hasLabel
                            id = 'passing'
                            labelText = 'Passing'
                            onChange = { onChange }
                            isValid = { allInputsArray[5].isValid }
                        />
                    </div>
                    <div className="col-6">
                        <Input
                            elementType = "input"
                            type = "text"
                            errorMessage = "Please Insert a 2-digit Number"
                            onKeyUp = { onChange }
                            pattern = "([0-9]{3})"
                            maxLength = "2"
                            inputMode="numeric"
                            min = "50"
                            id = 'dribbling'
                            max = "99"
                            name = 'dribbling'
                            required
                            hasLabel
                            labelText = 'Dribbling'
                            onChange = { onChange }
                            isValid = { allInputsArray[6].isValid }
                        />
                        <Input
                            elementType = "input"
                            onKeyUp = { onChange }
                            type = "text"
                            errorMessage = "Please Insert a 2-digit Number"
                            maxLength = "2"
                            inputMode="numeric"
                            min = "50"
                            max = "99"
                            pattern = "([0-9]{3})"
                            required
                            id = 'defence'
                            name = 'defence'
                            hasLabel
                            labelText = 'Defence'
                            onChange = { onChange }
                            isValid = { allInputsArray[7].isValid }
                        />
                        <Input
                            elementType = "input"
                            type="text"
                            errorMessage = "Please Insert a 2-digit Number"
                            onKeyUp = { onChange }
                            maxLength = "2"
                            pattern = "([0-9]{3})"
                            min = "50"
                            inputMode="numeric"
                            max = "99"
                            id = 'physique'
                            required
                            name = 'physique'
                            hasLabel
                            labelText = 'Physique'
                            onChange = { onChange }
                            isValid = { allInputsArray[8].isValid }
                        />
                    </div>
                </div>
            </div>

            <div className="add-color d-flex align-items-center justify-content-between">
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-12 col-lg-7 d-flex align-items-center">
                        <HexColorPicker
                            color = { textColor }
                            onChange = { changeColor } />
                        </div>
                        <div className="col-12 col-lg-5 d-flex align-items-center justify-content-end">
                            <Button
                                elementType='button'
                                color='#000'
                                background='#e9cc74'
                                clickHandler={ defaultTextColorHandler }>
                                Default Color
                             </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-div-w-100 mt-5">
                <Button
                    elementType='button'
                    color='#fff'
                    background='red'
                    clickHandler={ submit }>Create
                </Button>
            </div>

        </form>
    )
}


export default CreateCardForm;
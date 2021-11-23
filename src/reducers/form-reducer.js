/* Our Reducer will need 3 values in the action object:
    type, field, payload */

const formReducer = ( state, action ) => {

    switch ( action.type ) {
        case "ON_CHANGE":

            const inputChangingName = action.field;

            const newState = [...state];

            newState.forEach( singleInput => {
                if( inputChangingName === singleInput.field ) {
                    singleInput.value = action.payload;
                    singleInput.isValid = action.checkValidity;
                }
            });

            return newState;

        case "COLOR_CHANGE":

            const newStateColor = [...state];

            newStateColor.forEach( singleInput => {
                if( singleInput.field === 'text-color' ) {
                    singleInput.value = action.payload;
                }
            });

            return newStateColor;

        case "SHOW_SUBMIT_ERROR":

            const newStateSubmitEmptyError = [...state];

            newStateSubmitEmptyError.forEach( singleInput => {
                if( singleInput.value === '' || singleInput.value === null ) {
                    singleInput.isValid = false;
                }
            });

            return newStateSubmitEmptyError;

        default:

            return state;
    }
}

export default formReducer;
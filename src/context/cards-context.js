import React, { createContext, useReducer } from "react";

const CardsContext = React.createContext({
    cards: [],
    addCard: ( card ) => {

    },
    removeCard: ( id ) => {

    }
});

const defaultCardsState = {
    cards: []
}

const cardsReducer = ( state, action ) => {

    if( action.type === "ADD" ) {

    }

    if( action.type === "REMOVE" ) {

    }

}

const CardsProvider = props => {

    const [ cardsState, dispatchCardsAction ] = useReducer(cardsReducer, defaultCardsState);

    const addCardHandler = item => {
        dispatchCardsAction({
            type: 'ADD',
            item: item
        });
    };

    const removeCardHandler = id => {
        dispatchCardsAction({
            type: 'REMOVE',
            id: id
        });
    };

    const cardsContext = {
        cards: cardsState.cards,
        addCard: addCardHandler,
        removeCard: removeCardHandler
    }

    return (
        <CardsContext.Provider value={ cardsContext }>
            { props.children }
        </CardsContext.Provider>
    );

}

export default CardsProvider;

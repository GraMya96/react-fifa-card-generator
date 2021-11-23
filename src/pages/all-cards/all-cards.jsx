/* Dependencies: */
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

/* SCSS/CSS: */
import './all-cards.scss';

/* Other Components: */
import Card from '../../components/card/card';
import Button from '../../components/UI/button/button';
import Loading from '../../components/UI/loading/loading';

/* Other .js files */
import db from '../../firebase/firebase.config';

/* Images */
import create_card_img from '../../img/background-blue.jpg'

const PAGE_STYLE = {
    backgroundImage: `url('${create_card_img}')`,
}


const AllCards = props => {

    const [ cards, setCards ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getCardsData = async ( db ) => {
        const cardsRef = collection( db, 'cards' );
        let cardsSnapshot = await getDocs( cardsRef );
        /* Using await, every action in the async function
            defined afterwards would have to wait to the result
            of the Promise to be fetched completely */

        const cardList = cardsSnapshot.docs.map(doc => doc.data());
        setCards( cardList.reverse() );
        setIsLoading( false );
    }

    useEffect(() => {
        getCardsData(db);
    }, []);

    const allCards = cards.reverse().map(( singleCard, i ) => {
        return <Card
            key = { singleCard.name }
            textColor = { singleCard.textColor }
            value = { singleCard.overallValue }
            position = { singleCard.position }
            name = { singleCard.name }
            pac = { singleCard.pace }
            sho = { singleCard.shot }
            animation = { `fadeLeft .5s linear ${ i * .02 }s` }
            pas = { singleCard.passing }
            dri = { singleCard.dribbling }
            def = { singleCard.defence }
            phy = { singleCard.physique } />
    })

    return (
        <div className='all-cards'
            style={ PAGE_STYLE }>

            <Button
                elementType="a"
                color="#fff"
                clickHandler="/create-card"
                background="green">Create a Card &#8594;</Button>

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>All the Cards</h1>
                    </div>
                </div>

                { isLoading
                    ?   <Loading />
                    :   <div className="row">
                            <div className="cards-col col-12 d-flex justify-content-center align-items-start flex-wrap">
                                { allCards }
                            </div>
                        </div> }
            </div>
        </div>
    )
}


export default AllCards;

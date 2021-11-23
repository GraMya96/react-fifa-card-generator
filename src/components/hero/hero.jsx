import React from 'react';
import './hero.scss';

import Button from '../UI/button/button';
import SocialBanner from '../social-banner/social-banner';

import hero_img from '../../img/camp-nou.jpeg';



const HERO_STYLE = {
    backgroundImage: `url('${hero_img}')`,
}

const Hero = props => {

    return (
        <div className="hero_section p-relative"
            style={ HERO_STYLE }>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-7 d-flex align-items-center">
                        <h1>Football Cards Generator</h1>
                    </div>
                    <div className="col-12 col-md-4 offset-md-2 offset-xl-1 d-flex flex-column justify-content-center align-items-end">
                        <div className="buttons">
                            <Button
                                elementType = 'a'
                                background = "green"
                                color="#fff"
                                margin = "0 0 20px"
                                clickHandler = '/create-card'>Create a Card
                            </Button>
                            <Button
                                elementType = 'a'
                                color="#fff"
                                background = "red"
                                clickHandler = '/all-cards'>All Cards
                            </Button>
                        </div>
                    </div>
                </div>

                <SocialBanner />
            </div>
        </div>
    )
}


export default Hero;
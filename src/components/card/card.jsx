/* Dependencies: */
import React from 'react';

/* SCSS/CSS: */
import './card.scss';

/* Other Components: */

/* Images */
import messi_img from '../../img/messi.png';

const Card = ( { animation, textColor, value, position, name, pac, sho, pas, dri, def, phy } ) => {

    const animationStyle = {
        animation : animation
    }
    const card_style_object = {
        color: textColor
    }


    return (
        <div className='card'
            style={ animationStyle }>
            <div className="wrapper">
                {/* <!-- *** fut-player-card ***--> */}
                <div className="fut-player-card">
                    {/* <!-- Player Card Top--> */}
                    <div className="player-card-top"
                        style={ card_style_object }>
                        <div className="player-master-info">
                            <div className="player-rating"><span>{ value }</span></div>
                            <div className="player-position"><span> { position } </span></div>
                        </div>
                        <div className="player-picture">
                            <img src={ messi_img } alt="Messi" draggable="false" />
                        </div>
                    </div>

                    {/* <!-- Player Card Bottom--> */}
                    <div className="player-card-bottom">
                        <div className="player-info"
                            style={ card_style_object }>
                            {/* <!-- Player Name--> */}
                            <div className="player-name"><span>{ name }</span></div>
                            {/* <!-- Player Features--> */}
                            <div className="player-features">
                                <div className='skills-container d-inline-flex justify-content-start start'>
                                    <div className="player-feature-value">{ pac }</div>
                                    <div className="player-feature-title">PAC</div>
                                </div>
                                <div className='skills-container d-inline-flex justify-content-start start'>
                                    <div className="player-feature-value">{ sho }</div>
                                    <div className="player-feature-title">SHO</div>
                                </div>
                                <div className='skills-container d-inline-flex justify-content-start start'>
                                    <div className="player-feature-value">{ pas }</div>
                                    <div className="player-feature-title">PAS</div>
                                </div>
                                <div className='skills-container d-inline-flex justify-content-start end'>
                                    <div className="player-feature-value">{ dri }</div>
                                    <div className="player-feature-title">DRI</div>
                                </div>
                                <div className='skills-container d-inline-flex justify-content-start end'>
                                    <div className="player-feature-value">{ def }</div>
                                    <div className="player-feature-title">DEF</div>
                                </div>
                                <div className='skills-container d-inline-flex justify-content-start end'>
                                    <div className="player-feature-value">{ phy }</div>
                                    <div className="player-feature-title">PHY</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
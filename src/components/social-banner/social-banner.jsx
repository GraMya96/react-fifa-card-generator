/* Dependencies: */
import React from 'react';

/* SCSS/CSS: */
import './social-banner.scss';

/* Other Components: */

/* Images */
import fb_icon from '../../img/fb.png';
import ig_icon  from '../../img/insta.png';
import tw_icon from '../../img/twitter.png';


const SocialBanner = props => {
    return (
        <div className='social-banner d-flex align-items-center'>
            <div className="social d-flex align-items-center">
                <a className="d-flex align-items-center" href="https://www.facebook.com">
                    <img src={ fb_icon }
                        width="30px"
                        alt="Visit our Facebook page" />
                </a>
            </div>
            <div className="social d-flex align-items-center">
                <a className="d-flex align-items-center" href="https://www.instagram.com">
                    <img src={ ig_icon }
                        width="30px"
                        alt="Visit our Instagram page" />
                </a>
            </div>
            <div className="social d-flex align-items-center">
                <a className="d-flex align-items-center" href="https://www.twitter.com">
                    <img src={ tw_icon }
                        width="30px"
                        alt="Visit our Twitter page" />
                </a>
            </div>
        </div>
    )
}


export default SocialBanner;
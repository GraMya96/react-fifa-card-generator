import React, { useState } from 'react';
import "./menu.scss";
import { NavLink } from "react-router-dom";

const Menu = ( { pages, toggle } ) => {

    const [ isOpened, setIsOpened ] = useState( true );

    const pageList = pages.map(singlePage => {
        return (
            <li
                key={ singlePage.id }>
                    <NavLink
                        to={ singlePage.url }
                        exact
                    >
                        { singlePage.title }
                    </NavLink>
            </li>
        )
    });

    let hamburger = (
        <div
            className="Hamburger"
            onClick={ toggle }>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );

    return(
        <>
            { !isOpened && hamburger}

            <header className={`Menu ${ isOpened ? "open" : "close" }`}>
                <div
                    className="Close"
                    onClick={ toggle }>
                    <div></div>
                    <div></div>
                </div>
                <ul>
                    { pageList }
                </ul>
            </header>
        </>
    )
}


export default Menu;
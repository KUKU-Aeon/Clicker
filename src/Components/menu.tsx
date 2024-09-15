import React from 'react';
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <>
            <div className={"main_menu"}>
                <h1>DEMO CLICKER</h1>
                <button className={"main_menu_button"}><NavLink to="/clicker">СТАРТ</NavLink></button>
            </div>
        </>
    )
}

export default Menu;
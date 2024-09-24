import React from 'react';
import {NavLink} from "react-router-dom";
import {Animate} from "react-simple-animate";
import img from '../assets/Castle.png'

const Theme = require('../assets/CuttedMain.mp3')

function Menu() {

    return (
        <>
            <audio src={Theme} autoPlay={true} loop={true} ></audio>
            <Animate
                play={true}
                start={{ opacity: 0, filter: 'blur(10px)' }}
                end={{ opacity: 1, filter: 'blur(0)' }}
                duration={2.95}
            >
                <div className={"main_menu"}>
                    <h1>DEMO CLICKER</h1>
                    <button className={"main_menu_button"}><NavLink to="/clicker">СТАРТ</NavLink></button>
                    <img src={img} alt=""/>
                </div>
            </Animate>
        </>
    )
}

export default Menu;
import React from 'react';
import {NavLink} from "react-router-dom";
import {Animate} from "react-simple-animate";
import {useGlitch} from "react-powerglitch";

const Theme = require('../assets/mainTheme.mp3')

function Menu() {

    const glitch = useGlitch({
        "hideOverflow": true,
        "timing": {
            "duration": 3950
        },
        "glitchTimeSpan": {
            "start": 0.22,
            "end": 0.88
        },
        "shake": {
            "velocity": 5,
            "amplitudeX": 0.05,
            "amplitudeY": 0.1
        },
        "slice": {
            "count": 5
        }
    })
    return (
        <>
            <audio src={Theme} autoPlay={true} loop={true}></audio>
            <Animate
                play={true}
                start={{ opacity: 0, filter: 'blur(10px)' }}
                end={{ opacity: 1, filter: 'blur(0)' }}
                duration={2.95}
            >
                <div className={"main_menu"} >
                    <h1 ref={glitch.ref}>DEMO CLICKER</h1>
                    <button className={"main_menu_button"}><NavLink to="/clicker">СТАРТ</NavLink></button>
                </div>
            </Animate>
        </>
    )
}

export default Menu;
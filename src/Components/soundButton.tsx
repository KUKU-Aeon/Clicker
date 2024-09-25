import React, {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import mute from "../assets/mute.svg";
import unmute from "../assets/unmute.svg";

const ShopTheme = require('../assets/music.mp3');
const MainTheme = require('../assets/The Decisive Combat.mp3');
function SoundButton()
{
    const audioPlayer = useRef<HTMLAudioElement>(null);
    const button = useRef<HTMLImageElement>(null);
    const [isMuted, setIsMuted] = useState(false);
    let location = useLocation()

    useEffect(() => {
        if (audioPlayer.current && button.current)
        {
            isMuted ? button.current.src = mute : button.current.src = unmute;
            audioPlayer.current.muted = isMuted;
        }

    }, [audioPlayer, isMuted]);

    useEffect(() => {
       if (audioPlayer.current)
       {
           location.pathname === "/clicker" ? audioPlayer.current.src = MainTheme : audioPlayer.current.src = ShopTheme;
       }
    }, [location.pathname])

    function handleClick() {
        setIsMuted(!isMuted);
    }


    return(<div style={{display: "flex"}}>
            <audio autoPlay={true} ref={audioPlayer} loop={true}></audio>
            <button onClick={handleClick} className={"soundButton"}><img src="" alt="" ref={button} /></button>
        </div>
    )
}

export default SoundButton
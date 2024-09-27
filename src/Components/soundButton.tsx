import React, {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import mute from "../assets/mute.svg";
import unmute from "../assets/unmute.svg";
import {cookies} from "../App";

const ShopTheme = require('../assets/music.mp3');
const MainTheme = require('../assets/BattleTheme.mp3');
function SoundButton()
{
    const audioPlayer = useRef<HTMLAudioElement>(null);
    const button = useRef<HTMLImageElement>(null);
    const [isMuted, setIsMuted] = useState(cookies?.get('Muted') || true);
    let location = useLocation()

    useEffect(() => {
        if (audioPlayer.current && button.current)
        {
            isMuted ? button.current.src = mute : button.current.src = unmute;
            audioPlayer.current.muted = isMuted;
            cookies.set("Muted", isMuted, {path: '/' , maxAge: Number.MAX_SAFE_INTEGER})
        }

    }, [audioPlayer, isMuted]);

    useEffect(() => {
       if (audioPlayer.current)
       {
           location.pathname === "/clicker" ? audioPlayer.current.src = MainTheme : audioPlayer.current.src = ShopTheme;
           audioPlayer.current.volume = 0.5;
       }
    }, [location.pathname])

    function handleClick() {
        setIsMuted(!isMuted);
    }


    return(<div style={{display: "flex"}}>
            <audio autoPlay={true} ref={audioPlayer} loop={true} muted={isMuted}></audio>
            <button onClick={handleClick} className={"soundButton"}><img src="" alt="" ref={button} /></button>
        </div>
    )
}

export default SoundButton
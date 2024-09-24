import React, {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../store/actions";
import {cookies} from "../App";
import Drek from '../assets/nobg.gif';
import Coin from '../assets/coin.png';
import SoundButton from "./soundButton";
import {Animate} from "react-simple-animate";
import {Data} from "../store/actionsType";

const Clicker = () => {
    const dispatch = useDispatch<any>();
    const Storage: Data = useSelector((state: Data) => state);

    const name: string = 'Великий мимик, Drake__Reserve';
    const maxHealth: number = 100000;
    const healthBar = useRef<HTMLProgressElement>(null);

    function countHandlerChange() {
        setTimeout(() => {
            dispatch(actions.dealDMG(1000));
            dispatch(actions.addCoin(10));
        }, 0)

    }

    useEffect(() =>
    {
        if (maxHealth - Storage.DMG <= 0)
        {
            dispatch(actions.restore());
            cookies.set('Storage', Storage, { path: '/' , maxAge: Number.MAX_SAFE_INTEGER});
        }

        cookies.set('Storage', Storage, { path: '/' , maxAge: Number.MAX_SAFE_INTEGER});

    },[Storage.DMG])


    useEffect(() => {
        if (healthBar.current)
        {
            if (healthBar.current.value <= 100)
            {
                healthBar.current.className = 'green'
            }
            if (healthBar.current.value <= 60)
            {
                healthBar.current.className = 'yellow'
            }
            if (healthBar.current.value <= 30)
            {
                healthBar.current.className = 'red'
            }
        }
    }, [Storage.DMG])

    return (
        <>
            <div className={"header"}>
                <NavLink to="/shop">ЛАВКА</NavLink>
                <SoundButton />
            </div>

            <Animate
                play={true}
                start={{ opacity: 0, filter: 'blur(10px)' }}
                end={{ opacity: 1, filter: 'blur(0)' }}
                duration={1.5}
            >
                <div className={"clicker"}>
                    <button onClick={countHandlerChange} className={"clickerButton"}><img src={Drek} alt="Tap me!" style={{background: "transparent"}}/></button>
                    <h2>{name}</h2>
                    <progress value={((maxHealth - Storage.DMG)/maxHealth)*100}  max={100} ref={healthBar} />
                    <div className={'clickerSpan'}>{maxHealth - Storage.DMG}</div>
                    <div className={'clickerSpan'}>{Storage.coins}<img src={Coin} alt="coin" style={{width: 50}}/></div>
                </div>
            </Animate>

        </>
    )
}

export default Clicker;

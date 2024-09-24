import * as actions from "../store/actions";
import {NavLink} from "react-router-dom";
import SoundButton from "./soundButton";
import {useDispatch, useSelector} from "react-redux";
import {Data} from "../store/actionsType";
import React, {useEffect, useRef, useState} from "react";
import {AnimateKeyframes} from "react-simple-animate";

import Coin from "../assets/coin.png";
import Isaac from  '../assets/Isacccryingbad.png'
import img_1 from '../assets/Friendmini.png'
import img_2 from '../assets/punchboy.png'
import img_3 from '../assets/shade.png'
import {cookies} from "../App";

const powerUp = require('../assets/powerup.mp3')
const noMoney = require('../assets/nomoney.mp3')

interface ShopItem
{
    id: number
    name: string;
    bust: number;
    price: number;
    imgSrc: string;
    purchased: boolean
}

const WBMONSTR = () :ShopItem[] =>
{
    return [
        {id: 1, name: "Друг бездельник", bust: 2, price: 1000, imgSrc: img_1, purchased: false},
        {id: 2, name: "Терпила", bust: 5, price: 10000, imgSrc: img_2, purchased: false},
        {id: 3, name: "Тень", bust: 10, price: 50000, imgSrc: img_3, purchased: false},
    ]
}


function ShopItems()
{
    const bonuses = WBMONSTR()
    const dispatch = useDispatch<any>();
    const stash = useRef<HTMLParagraphElement>(null);
    const audio = useRef<HTMLAudioElement>(null)
    const Storage: Data = useSelector((state: Data) => state);
    const [purchased, setPurchased] = useState<ShopItem>()
    const [play, setPlay] = useState<boolean>(false)

    function findTrinket(item: ShopItem)
    {
        return (Storage.Trinkets.find((el) => el.id === item.id) && true) || false
    }


    useEffect(() => {
        if (purchased)
        {
            if (Storage.coins < purchased.price)
            {
                if (stash.current && audio.current)
                {
                   audio.current.src = noMoney;
                   audio.current.play();
                   setPlay(!play);
                }
            }
            else
            {
               if (audio.current)
               {
                   audio.current.src = powerUp;
                   audio.current.play();
               }

                if (!findTrinket(purchased))
                {
                    dispatch(actions.removeCoins(purchased.price))
                    dispatch(actions.addTrinket(purchased))
                    cookies.set('Storage', Storage, { path: '/' , maxAge: Number.MAX_SAFE_INTEGER});
                }
            }
        }

    }, [purchased])


    return (
        <>
            <div className={"header"}>
                <NavLink to="/clicker">Назад</NavLink>
                <SoundButton />
            </div>
            <audio ref={audio}></audio>
            <div className={"shop"}>
                <div className={"cardSection"} style={{marginTop: 50}}>
                    {bonuses.map((el :ShopItem) =>
                        <>
                            <div className={"Card"} key={el.id}>
                                <img src={el.imgSrc} alt={el.name} key={el.imgSrc}/>
                                <p style={{fontSize: 16}}>{el.name}</p>
                                <p style={{fontSize: 10}}>множитель урона Х{el.bust}</p>
                                <p>{el.price} <img src={Coin} alt="coin" style={{width: 25}}/></p>
                                <button onClick={() => {setPurchased(el)}} className={"cardButton"} disabled={findTrinket(el)}>{findTrinket(el) ? "Спутник уже с вами!" : "Призвать"}</button>
                            </div>
                        </>
                    )}
                </div>
                <h1 ref={stash} className={'stash'}>
                    <AnimateKeyframes
                        play={play}
                        keyframes={[
                            { 0: 'transform: translateX(-5px)' },
                            { 25: 'transform: translateX(0)' },
                            { 50: 'transform: translateX(5px)' },
                            { 100: 'transform: translateX(0)' }
                        ]}
                        duration={0.1}
                    >{Storage.coins} <img src={Coin} alt="coin" style={{width: 50}}/>
                    </AnimateKeyframes>
                </h1>
                <img src={Isaac} alt="Айзек" style={{ maxWidth: '100%', display: 'block', margin: 'auto' }}/>
            </div>
        </>
    )
}

export default ShopItems;
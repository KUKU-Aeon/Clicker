import React, {useState, useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";
import Drek from '../assets/btnbcg.png'
import { Cookies } from 'react-cookie';
import SoundButton from "./soundButton";

const Clicker = () => {

    const cookies = new Cookies();
    let location = useLocation();
    const [count, setCount] = useState<number>(cookies?.get('count') || 0);

    function countHandlerChange() {
        setTimeout(() => {
            setCount(count + 1);
        }, 0)

    }

    useEffect(() =>
    {
        cookies.set('count', count, { path: '/' });
    },[location.pathname, count])

    return (
        <>
            <div className={"header"}>
                <NavLink to="/shop">SHOP</NavLink>
                <SoundButton />
            </div>
            <div className={"clicker"}>
                <button onClick={countHandlerChange} className={"clickerButton"}><img src={Drek} alt="Tap me!"/></button>
                <div className={'clickerSpan'}>{count}</div>
            </div>
        </>
    )
}

export default Clicker;
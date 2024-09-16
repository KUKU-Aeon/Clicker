import React, {useState, useEffect, useRef} from "react";
import {NavLink, useLocation} from "react-router-dom";
import { Cookies } from 'react-cookie';
import Drek from '../assets/nobg.gif'
import SoundButton from "./soundButton";
import {Animate} from "react-simple-animate";

const Clicker = () => {

    const cookies = new Cookies();
    const name: string = 'Мимик';
    const maxHealth: number = 1000;
    let location = useLocation();
    const healthBar = useRef<HTMLProgressElement>(null);
    const [count, setCount] = useState<number>(cookies?.get('count') || maxHealth);

    function countHandlerChange() {
        setTimeout(() => {
            setCount(count - 10);
        }, 0)

    }

    useEffect(() =>
    {
       if ((count - 10) <= 0)
       {
           setCount(maxHealth);
           cookies.set('count', maxHealth, {path: '/clicker'})
       }

        cookies.set('count', count, {path: '/clicker'})

    },[location.pathname, count])


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
    }, [count])

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
                    <progress value={(count/maxHealth)*100}  max={100} ref={healthBar} />
                    <div className={'clickerSpan'}>{count}</div>
                </div>
            </Animate>

        </>
    )
}

export default Clicker;
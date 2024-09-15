
import img from '../assets/Friendmini.png'
import Isaac from  '../assets/Isacccryingbad.png'
import {NavLink} from "react-router-dom";
import SoundButton from "./soundButton";




interface ShopItem
{
    id: number
    name: string;
    bust: number;
    imgSrc: string;
    purchased: "yes" | "no"
}

const WBMONSTR = () :ShopItem[] =>
{
    return [
        {id: 1, name: "Друг бездельник", bust: 2, imgSrc: img, purchased: "no"},
        {id: 2, name: "Друг бездельник", bust: 2, imgSrc: img, purchased: "no"},
        {id: 3, name: "Друг бездельник", bust: 2, imgSrc: img, purchased: "no"},
    ]
}



function ShopItems()
{
    const bonuses = WBMONSTR()

    return (
        <>
            <div className={"header"}>
                <NavLink to="/clicker">Назад</NavLink>
                <SoundButton />
            </div>
            <div className={"cardSection"} style={{marginTop: 50}}>
            {bonuses.map((el :ShopItem) =>
                <>
                    <div className={"Card"} key={el.id}>
                        <img src={el.imgSrc} alt={el.name} key={el.imgSrc}/>
                    </div>
                </>
            )}
            </div>
            <p>Пока тут пусто!</p>
            <img src={Isaac} alt="Айзек" style={{ maxWidth: '100%', display: 'block', margin: 'auto' }}/>
        </>
    )
}

export default ShopItems;
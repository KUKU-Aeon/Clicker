
import img from '../assets/Friendmini.png'
import Isaac from  '../assets/Isacccryingbad.png'
const shopTheme = require('../assets/music.mp3');



interface ShopItem
{
    name: string;
    bust: number;
    imgSrc: string;
    purchased: "yes" | "no"
}

const WBMONSTR = () :ShopItem[] =>
{
    return [
        {name: "Друг бездельник", bust: 2, imgSrc: img, purchased: "no"},
        {name: "Друг бездельник", bust: 2, imgSrc: img, purchased: "no"},
        {name: "Друг бездельник", bust: 2, imgSrc: img, purchased: "no"},
    ]
}

function ShopItems()
{
    const bonuses = WBMONSTR()
    return (
        <>
            <audio src={shopTheme} autoPlay={true}></audio>
            <div className={"cardSection"} style={{marginTop: 50}}>
            {bonuses.map((el :ShopItem) =>
                <>
                    <div className={"Card"}>
                        <img src={el.imgSrc} alt={el.name}/>
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
import React from 'react';
import ShopItems from '../Components/ShopItem'
import {NavLink} from "react-router-dom";

function Shop() {
    return (
       <>
           <div style={{marginTop: 50}}>
               <NavLink to="/">Назад</NavLink>
           </div>
           <ShopItems />
       </>
    )
}

export default Shop;
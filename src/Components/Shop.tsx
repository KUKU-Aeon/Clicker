import React from 'react';
import ShopItems from '../Components/ShopItem'
import {Animate} from "react-simple-animate";
function Shop() {
    return (
       <>
           <Animate
               play={true}
               start={{ opacity: 0, filter: 'blur(10px)' }}
               end={{ opacity: 1, filter: 'blur(0)' }}
           >
               <ShopItems />
           </Animate>
       </>
    )
}

export default Shop;
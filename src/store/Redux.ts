import * as actions from './actionsType';
import {Data} from "./actionsType";

type DeviceAction = {
    type: string;
    payload: any
}

const init: Data = {
    DMG: 0,
    coins: 0,
    Trinkets: []
}

export default function reducer(state: Data | undefined, action: DeviceAction): Data {

    if (!state) {
        return init;
    }

    switch (action.type) {
        case actions.DMG_ADD:
            return { ...state, DMG: state.DMG + action.payload }
        case actions.COIN_ADD:
            return { ...state, coins: state.coins + action.payload }
        case actions.COIN_REMOVE:
            return { ...state, coins: state.coins - action.payload }
        case actions.TRINKET_ADD:
               return {...state, Trinkets: [...state.Trinkets, action.payload]}
        default:
            return state;
    }
}
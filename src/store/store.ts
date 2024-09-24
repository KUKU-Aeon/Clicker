import { createStore } from 'redux';
import reducer from "./Redux";
import {Data} from "./actionsType";
import {cookies} from '../App'

const init: Data = {
    DMG: 0,
    coins: 0,
    Trinkets: []
}

const getInitialValue = (): Data => {
    const value = cookies.get('Storage')
    console.log(value, cookies.get('Storage'))
    return value ? value : init;
};

const store = createStore(
    reducer,
    getInitialValue()
);

export default store;
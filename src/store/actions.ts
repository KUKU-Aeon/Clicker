import * as actions from './actionsType';

export const dealDMG = (elem: number) => ({
    type: actions.DMG_ADD,
    payload: elem
});

export const addCoin = (elem: number) => ({
    type: actions.COIN_ADD,
    payload: elem
})

export const removeCoins = (elem: number) => ({
    type: actions.COIN_REMOVE,
    payload: elem
})

export const addTrinket = (elem: {}) => ({
    type: actions.TRINKET_ADD,
    payload: elem
})




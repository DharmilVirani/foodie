import { SET_FOOD_LIST } from './constant'

export const setFoodList = (list) => ({
    type: SET_FOOD_LIST,
    payload: list,
})

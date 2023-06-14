import { SET_FOOD_LIST } from './constant'

const initialState = {
    foodList: [],
}

export default function foodReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FOOD_LIST: {
            return {
                ...state,
                foodList: action.payload,
            }
        }
        default:
            return state
    }
}

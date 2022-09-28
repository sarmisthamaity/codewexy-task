import { ADD_ITEM } from "../actionTypes/actionTypes";

const initialState = {
    combinations: localStorage.getItem('combinations') ? JSON.parse(localStorage.getItem('combinations')) : []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let combinations = [...state.combinations]
            if (combinations.length) {
                if (combinations[combinations.length - 1][0] === action.payload) {
                    combinations[combinations.length - 1].push([action.payload])
                } else {
                    combinations.push([action.payload])
                }
            } else {
                combinations.push([action.payload])
            }
            localStorage.setItem('combinations', JSON.stringify(combinations))
            return {
                ...state,
                combinations: [...combinations]
            };
        default:
            return state;
    }
};

export default cartReducer

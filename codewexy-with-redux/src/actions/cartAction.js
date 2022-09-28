import { ADD_ITEM } from "../actionTypes/actionTypes";

const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload
  };
};

export { addItem };
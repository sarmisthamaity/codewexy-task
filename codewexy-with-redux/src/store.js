// const store = createStore()
import { createStore } from "redux";
// import { cartReducer } from "./reducers/cartReducer";
import cartReducer from "./reducers/cartReducer";

const store = createStore(cartReducer);

export default store;
import thunk from "redux-thunk";
import cartReducer from "./cart";
import categoriesReducer from "./categories";

import { applyMiddleware, combineReducers, createStore } from "redux";

const reducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer
});

let store = createStore(reducer, applyMiddleware(thunk));

export default store;
// combineReducers({})

// Takes both the reducers and gives you and object of reducers

// thunk is a middleware that allows you to write async code in redux
// thunk is a function that returns a function

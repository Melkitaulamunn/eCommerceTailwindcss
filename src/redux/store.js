import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { drawerReducer } from "./reducers/drawer";
import { productsReducer } from "./reducers/products";
import { productsDetailReducer } from "./reducers/productDetail";
import { cardReducer } from "./reducers/card";
import { searchReducer } from "./reducers/search";

const cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
let initialState = {
  card: { cardItems },
};

const reducers = combineReducers({
  drawer: drawerReducer,
  products: productsReducer,
  product: productsDetailReducer,
  card: cardReducer,
  search: searchReducer,
});
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

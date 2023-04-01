import { combineReducers,createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { drawerReducer } from "./reducers/drawer";
import { productsReducer } from "./reducers/products";
import {productsDetailReducer} from "./reducers/productDetail"

let initialState={

}

const reducers=combineReducers({
    drawer:drawerReducer,
    products:productsReducer,
    product:productsDetailReducer


})
const store=createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)));

export default store;
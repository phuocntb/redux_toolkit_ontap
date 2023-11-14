import { createStore, combineReducers} from "redux";
import { productReducer } from "./reducers/product.reducer";
import { cartReducer } from "./reducers/cart.reducer";

const RootReducer= combineReducers({
    productStore: productReducer,
    cartStore: cartReducer
})

export const store = createStore(RootReducer)
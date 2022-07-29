import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer} from "./App/reducer";
import{reducer as AuthReducer} from "./Auth/reducer"
import { reducer as RegisterReducer} from "./Register/reducer"
import {reducer as cartReducer} from "./cart/reducer"
import {reducer as purchasedReducer} from "./PurchaseCourses/reducer"
const rootReducer=combineReducers({
AppReducer,
AuthReducer,
RegisterReducer,
cartReducer,
purchasedReducer

})
 export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))
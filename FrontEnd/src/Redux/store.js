import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./App/reducer";

const rootReducer=combineReducers({

})
 export const store= legacy_createStore(reducer, applyMiddleware(thunk))
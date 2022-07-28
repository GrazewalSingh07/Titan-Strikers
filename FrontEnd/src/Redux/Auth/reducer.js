import { loadData } from "../../utils/localStorage";
import * as types  from "./actionTypes";

const initialState = {
  isAuth: loadData("key")?true: false,
  token:loadData("key")||"",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_LOADING:
      return {
        ...state,
        isLoading:true,
        isError:false,
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth:true,
        token:loadData("key"),
        isLoading:false,
        isError:false,
      }   
    case types.LOGIN_ERROR:
    return {
      ...state,
      isLoading:false,
      isError:true,
    }  
    case types.LOGOUT:
      return {
        ...state,
        isAuth:false,
        token:loadData("key"),
        
      }
    default:
      return state;
  }
};

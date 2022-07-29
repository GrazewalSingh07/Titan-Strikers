import axios from "axios";
import { saveData } from "../../utils/localStorage";
import * as types from "./actionTypes";



export const login = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });
 return axios
    .post("http://localhost:4000/auth/signin", data)
    .then((r) =>{
      saveData(r.data.token)
      localStorage.setItem("profile",JSON.stringify(r.data.user.profile))
       
       dispatch({ type: types.LOGIN_SUCCESS, payload: r.data })
      })
    .catch(() => dispatch({ type: types.LOGIN_ERROR }));
};

export const Logout = (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
 

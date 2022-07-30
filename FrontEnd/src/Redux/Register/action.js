import axios from "axios"
import * as types from "./actionTypes"

export const registerSuccess=()=>{
    return{
        type:types.REGISTER_SUCCESS
    }
}
export const registerfailure=()=>{
    return{
        type:types.REGISTER_FAILURE
    }
}
export const registerrequest=()=>{
    return{
        type:types.REGISTER_REQUEST
    }
}
export const register=(data)=>(dispatch)=>{
    console.log(data)
    dispatch(registerrequest())
  return  axios({
        method: "post",
        url: "https://titanstrikershackathon.herokuapp.com/auth/signup",
        data,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res)=>{
        dispatch(registerSuccess())
      }).catch((err)=>{
        console.log(err)
        dispatch(registerfailure())
    })
   
    
    // return axios.post("http://localhost:4000/auth/signup",data).then((res)=>{
        // console.log(res)
       
    
   
}
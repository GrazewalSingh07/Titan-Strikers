import axios from "axios"
import * as types from "./actionTypes"

export const getdatarequest=()=>{
    return {
        type:types.GET_DATA_REQUEST
    }
}
export const getdatasuccess=(payload)=>{
    return{
        type:types.GET_DATA_SUCCESS,
        payload
    }
}
export const getdatafailure=()=>{
    return {
        type:types.GET_DATA_FAILURE,

    }
}
export const getdata=()=>(dispatch)=>{
    dispatch(getdatarequest())
    return axios.get("https://titanstrikershackathon.herokuapp.com/course").then((res)=>{
        dispatch(getdatasuccess(res.data))
    }).catch((err)=>{
        dispatch(getdatafailure())
    })
    
}
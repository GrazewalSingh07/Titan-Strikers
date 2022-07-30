import * as types from "./actiontypes"
import axios from "axios"




export const getcart=()=>(dispatch,state)=>{
    dispatch({type:types.GET_CART_REQUEST})
    return axios.get("https://titanstrikershackathon.herokuapp.com/cart",{
        headers: {
            'Authorization': 'Bearer ' + state().AuthReducer.token
          }
    }).then((res)=>{
        dispatch({type:types.GET_CART_SUCCESS,payload:res.data})
    }).catch((err)=>{
        console.log(err)
        dispatch({type:types.GET_CART_FAILURE})
    })
}

export const addtocart=(data)=>(dispatch,state)=>{
     
    dispatch({type:types.POST_CART_REQUEST})
    return axios.post("https://titanstrikershackathon.herokuapp.com/cart",data,{
        headers: {
            'Authorization': 'Bearer ' + state().AuthReducer.token
          },
        data
    }).then((res)=>{
        
       dispatch(getcart())
    }).catch((err)=>{
        dispatch({type:types.POST_CART_FAILURE})
    })
}

export const removefromcart=(id)=>(dispatch,state)=>{
     
    return axios.delete(`https://titanstrikershackathon.herokuapp.com/cart/${id}`,{
        headers: {
            'Authorization': 'Bearer ' + state().AuthReducer.token
          },
        
    }).then((res)=>{
        console.log(res)
        dispatch(getcart())
    }).catch((err)=>{
        console.log(err)
    })
}
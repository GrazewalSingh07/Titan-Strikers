
import axios from "axios"
import * as types from "./actiontypes"



export const getpurchase=()=>(dispatch,state)=>{
     
    dispatch({type:types.GET_PURCHASE_REQUEST})
    return axios.get("https://titanstrikershackathon.herokuapp.com/my-courses",{
        headers: {
            'Authorization': 'Bearer ' + state().AuthReducer.token
          },
         
    }).then((res)=>{
        
       dispatch({type:types.GET_PURCHASE_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.GET_PURCHASE_FAILURE})
    })
}



export const postpurchase=()=>(dispatch,state)=>{
     
     let temp=state().cartReducer.cart
     let x=temp.map((el)=>{
           return el.courseId._id
     })
     
    dispatch({type:types.PURCHASE_REQUEST})
    return axios.post("https://titanstrikershackathon.herokuapp.com/my-courses",x,{
        headers: {
            'Authorization': 'Bearer ' + state().AuthReducer.token
          },
        x
    }).then((res)=>{
        console.log(res)
       dispatch(getpurchase())
    }).catch((err)=>{
        dispatch({type:types.PURCHASE_FAILURE})
    })
}
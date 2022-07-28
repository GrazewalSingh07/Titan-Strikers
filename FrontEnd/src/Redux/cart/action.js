import * as types from "./actiontypes"
import axios from "axios"
export const getcart=()=>(dispatch,state)=>{
 
    return axios.get("http://localhost:4000/cart",{
        headers: {
            'Authorization': 'Bearer ' + state().AuthReducer.token
          }
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

export const addtocart=(data)=>(dispatch,state)=>{
    return axios.post("http://localhost:4000/cart",{
        headers: {
            'Authorization': 'Bearer ' + state().AuthReducer.token
          },
        data
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

export const removefromcart=(id)=>(dispatch,state)=>{
    return axios.delete(`http://localhost:4000/cart${id}`,{
        headers: {
            'Authorization': 'Bearer ' + state().AuthReducer.token
          },
        
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
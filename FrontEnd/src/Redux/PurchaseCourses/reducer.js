import * as types from "./actiontypes"
const initState={
    mycourses:[],
    isloading:false,
    isError:false
}
export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case(types.GET_PURCHASE_SUCCESS):{
            return{
                ...state,
                isloading:false,
                mycourses:payload
            }
        }
        case(types.GET_PURCHASE_REQUEST):{
            return{
                ...state,
                isloading:true,
            }
        }
        case(types.GET_PURCHASE_FAILURE):{
            return{
                ...state,
                isloading:false,
                isError:FALSE
            }
        }
        default:{
            return state
        }
    }
}
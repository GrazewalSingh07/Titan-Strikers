import * as types from "./actiontypes"

const initState={
    cart:[],
    isloading:false,
    isError:false,

    isDeleting:false,
    deleted:false
}
export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case(types.GET_CART_REQUEST):{
            return{
                ...state,
                isloading:true,
                
            }
        }
        case(types.GET_CART_SUCCESS):{
            return{
                ...state,
                isloading:false,
                cart:payload
            }
        }
        case(types.GET_CART_FAILURE):{
            return{
                ...state,
                isloading:false,
                 isError:true
            }
        }
        case(types.DELETE_CART_REQUEST):{
            return{
                ...state,
               isDeleting:true
                
            }
        }
        case(types.GET_CART_SUCCESS):{
            return{
                ...state,
               deleted:true
            }
        }
        case(types.POST_CART_REQUEST):{
            return{
                ...state,
                isloading:true,
                
            }
        }
      
        case(types.GET_CART_FAILURE):{
            return{
                ...state,
                isloading:false,
                 isError:true
            }
        }
        default:{
            return state
        }
    }
}
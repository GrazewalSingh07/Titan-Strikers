import * as types from "./actionTypes"

const initState={
    registering:false,
    registerSuccessfull:false,
    registerFailed:false,
}
export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case (types.REGISTER_SUCCESS):{
            return{
                registering:false,
                registerSuccessfull:true,
                registerFailed:false,
            }
        }
        case(types.REGISTER_FAILURE):{
            return{
                registering:false,
                registerSuccessfull:false,
                registerFailed:true,
            }
        }
        case(types.REGISTER_REQUEST):{
            return{
                registering:true,
                registerSuccessfull:false,
                registerFailed:false,
            }
        }
        default:{
            return state
        }
    }
}
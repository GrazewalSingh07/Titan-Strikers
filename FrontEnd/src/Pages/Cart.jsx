import { Container } from "@chakra-ui/react"
import { useEffect } from "react"
import { getcart } from "../Redux/cart/action"
import { useDispatch, useSelector } from "react-redux/"
import { CartCard } from "../components/cartcard"
export const Cart=()=>{
    const dispatch=useDispatch()
    const data= useSelector((state)=>state.cartReducer.cart)
    useEffect(()=>{
        dispatch(getcart())
    },[])
    return <Container>
        Cart
        {data?.map((el)=>{

            return <CartCard {...el}/>
        })}
    </Container>
}
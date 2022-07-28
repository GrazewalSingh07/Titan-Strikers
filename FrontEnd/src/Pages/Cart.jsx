import { Container } from "@chakra-ui/react"
import { useEffect } from "react"
import { getcart } from "../Redux/cart/action"
import { useDispatch } from "react-redux/"
export const Cart=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getcart())
    },[])
    return <Container>
        Cart
    </Container>
}
import { Container,Heading ,Button} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getcart } from "../Redux/cart/action"
import { useDispatch, useSelector } from "react-redux/"
import { CartCard } from "../components/cartcard"
import { useNavigate } from "react-router-dom"
export const Cart=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [sum,setsum]=useState(0)
    const data= useSelector((state)=>state.cartReducer.cart)
    useEffect(()=>{
        dispatch(getcart())
       let temp=data.reduce((ac,cv)=>{
             
            return ac+cv.courseId.price
        },0)
        setsum(temp)
    },[data])
    const handleCheckout=()=>{
        navigate(`/payment/${sum}`)
    }
    return <Container maxW="container.xl">
        <Heading p={5}>Cart</Heading>
        {data?.map((el)=>{

            return <CartCard key={el._id} {...el.courseId} id={el._id}/>
        })}
        <Container pt={10}>
        <Heading p={2} fontSize="large">TOTAL : Rs. {sum}</Heading>
            <Button onClick={handleCheckout} colorScheme="green">Proceed to checkout</Button>
        </Container>
    </Container>
}
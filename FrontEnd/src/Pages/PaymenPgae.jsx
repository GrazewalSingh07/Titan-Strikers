import { Container,Image,Heading ,Button} from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { postpurchase } from "../Redux/PurchaseCourses/action"
export const PaymentPage=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {sum}=useParams()
    const handlepurchase=()=>{
        dispatch(postpurchase()).then(()=>{
                navigate("/purchase-courses")
        })
    }
    return <Container textAlign="center" margin="auto" pt={10}>

        <Image src="http://noida.stpi.in/sites/default/files/inline-images/bhim.png"/>
        <Heading fontSize="3xl">Payment of {sum}</Heading>
        <Button onClick={handlepurchase} width="100%" mt={10} colorScheme="green" >Payment Complete</Button>
    </Container>
}
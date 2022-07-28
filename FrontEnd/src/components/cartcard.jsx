import { Container, Image,HStack,Button,Text,Heading } from "@chakra-ui/react"
import { removefromcart } from "../Redux/cart/action"
import { useDispatch } from "react-redux"
export const CartCard=({photoUrl,name,subject,_id,id,price})=>{
    const dispatch= useDispatch()
   
    return <Container maxW="container.2xl" mt={5} >
        <Container  boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"  maxW="container.xl" margin="auto" key={_id} >
    <HStack spacing="auto" p={10}>
      <Container>
        <Image width="20%" src={photoUrl}/>
      </Container>
        <Container >
            <Heading p={2} fontSize="larger"width="100%">{name}</Heading>
            <Heading p={2} fontSize="large">Subject : {subject}</Heading>
           
        
      </Container >
      <HStack width="100%">
        <Heading p={2} fontSize="large">Price : {price}</Heading>
        <Button onClick={()=>{dispatch(removefromcart(id))}} colorScheme="red" width="50%">Remove from cart</Button>
    </HStack>
    </HStack>
  
  </Container>
    
    </Container>
}
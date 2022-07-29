import { Box, Container,Text, Img,Heading,Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  const handlenav=()=>{
navigate("/signup")
  }
  const handleClick = () => {
    window.open("https://discussion-room-titan.netlify.app/", "_blank");
  }
  return (
   <Container  p={10} m="auto" maxW="container.2xl">
     <Container  m="auto" maxW="container.2xl" backgroundSize="contain" backgroundRepeat="no-repeat" backgroundImage="https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=1380&t=st=1659069417~exp=1659070017~hmac=00d8962ffac6884a29f9ac25cb500a041f62179d3bdd8697b6de72462786c6a5">
       
       <Container  m="auto" pt={10} height="100vh"  width="100%">
               
               <VStack spacing={10}>
                  <Button  width="100%" onClick={handlenav}>Get Started now</Button>
           
            
                  
                  <Button colorScheme="pink" width="100%" onClick={handleClick}>Have Doubts? Join live session</Button>
                  </VStack>
           
         </Container>
         
       
 </Container>
   </Container>
  )
}

export default Home
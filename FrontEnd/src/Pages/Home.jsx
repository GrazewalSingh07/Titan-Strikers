import { Box, Container, Img,Heading,Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  const handlenav=()=>{
navigate("/signup")
  }
  return (
    <Container m="auto" maxW="container.2xl" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundImage="https://images.unsplash.com/photo-1601807576163-587225545555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80">
       
      <Container margin="auto" height="100vh"  width="100%">
        
<Button onClick={handlenav}>Sign Up</Button>
      </Container>
      
</Container>
  )
}

export default Home
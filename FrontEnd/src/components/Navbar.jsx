import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FcSearch} from "react-icons/fc"
import { useSelector,useDispatch } from 'react-redux'
import {Box, Image,Container,HStack,Input,Button,InputGroup,InputLeftElement} from "@chakra-ui/react"
import { Logout } from '../Redux/Auth/action'
import { Mycourse } from '../Pages/MyCourse'
const Navbar = () => {
 
  const dispatch=useDispatch()
  const isAuth=useSelector((state)=>state.AuthReducer.isAuth) 

  return (
    <>
 <Container maxW="container.2xl"> 
  <marquee>WELCOME  |  SELECT YOUR COURSES</marquee>

    <Container  boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"   maxW="container.2xl" bg="green.100" color="green.800"  fontSize="20px" margin="auto" >
    <HStack width="90%" spacing="auto">
      <Container width="container.sm" height="10vh">
        <Image p={2} width="10vh" src="https://png.pngtree.com/png-clipart/20220530/original/pngtree-back-to-school-circle-study-education-concept-vector-background-poster-png-image_7775099.png"/>
      </Container>
      <Container width="container.sm">
       
        <InputGroup>
        <InputLeftElement children={<FcSearch/>}/>
        <Input   variant="flused" placeholder="search by name of course" />
        </InputGroup>
      </Container>
      <Container width="container.sm" margin="auto">
          <HStack width="100%" spacing="auto">
           
            <Link to="/">Home</Link>
            
            <Link to="/courses">Courses</Link>
            <Link to="/purchase-courses" >My courses</Link>
            <Link to="/cart" >Cart</Link>
            
            {!isAuth?<Link to="/signup">Sign up</Link>:null } 
          {isAuth?<Button colorScheme="red" onClick={()=>{
            localStorage.clear()
            Logout(dispatch)
          }}>Log out</Button>:<Link to="/signin">Login</Link> } 
            
        </HStack>
      </Container>
    </HStack>
    </Container>
  </Container>

    </>
  )
}

export default Navbar
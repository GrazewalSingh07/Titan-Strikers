import React from 'react'
import { Link } from 'react-router-dom'
import {Box, Img} from "@chakra-ui/react"
const Navbar = () => {
  return (
    <>
    <marquee>WELCOME  |  SELECT YOUR COURSES</marquee>
    <Box bg="green.100" color="green.800" h="80px" fontSize="20px" marginTop="20px" display="grid" gridTemplateColumns="40% 60%">
    <Box>
<Img w="15%" src="https://png.pngtree.com/png-clipart/20220530/original/pngtree-back-to-school-circle-study-education-concept-vector-background-poster-png-image_7775099.png"/>
    </Box>
    <Box display="grid" gridTemplateColumns="repeat(4,1fr)" marginTop="30px">
    <Link to="/">Home</Link>
        <Link to="/signin">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/courses">Courses</Link>
        
    </Box>
        
    </Box>

    </>
  )
}

export default Navbar
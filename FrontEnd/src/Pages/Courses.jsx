import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getdata } from '../Redux/App/action'

import {Box, Img, Text,Container,VStack,Stack} from "@chakra-ui/react"

import {Link} from "react-router-dom"
const Courses = () => {
    const data=useSelector((state)=>state.AppReducer.data)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getdata())
    },[])
 
  return (
    <Container maxW="container.xl" margin="auto" gap={10} display="grid" gridTemplateColumns="repeat(3,1fr)" marginTop={10}>
        {data?.map((ele)=>{
            return <Link to={`/courses/${ele._id}`} key={ele._id}> <Box textAlign="center" margin="auto" height="100%" padding={5} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" key={ele._id} _hover={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                <VStack height="100%"  spacing="auto">
                    <Container height="70%" background="#F5F5F5"  p={5} >
                        <Img margin="auto" width="60%"src={ele.photoUrl}/>
                    </Container>
                    <Stack>
                        <Text>Course Name : {ele.name}</Text>
                        <Text>Course Duration : {ele.duration}</Text>
                        <Text>Subject : {ele.subject}</Text>
                    </Stack>
                    </VStack>
            </Box></Link>
            
        })}
    </Container>
  )
}

export default Courses
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getdata } from '../Redux/App/action'

import {Box, Img, Text} from "@chakra-ui/react"

import {Link} from "react-router-dom"
const Courses = () => {
    const data=useSelector((state)=>state.data)
    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(getdata())
    },[])

    console.log(data)
  return (
    <Box  w="90%"  margin="auto" gap="40px" display="grid" gridTemplateColumns="repeat(3,1fr)" marginTop="40px">
        {data.map((ele)=>{
            return <Link to={`/courses/${ele._id}`} key={ele._id}> <Box key={ele._id}>
                
                <Img w="100%" src={ele.photoUrl}/>
                <Text>Course Name : {ele.name}</Text>
                <Text>Course Duration : {ele.duration}</Text>
                <Text>Subject : {ele.subject}</Text>
            </Box></Link>
            
        })}
    </Box>
  )
}

export default Courses
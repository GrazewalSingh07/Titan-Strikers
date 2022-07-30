import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getdata } from '../Redux/App/action'
import {Box, Image,HStack,Text,Heading,Button,Container} from "@chakra-ui/react"
import { addtocart } from '../Redux/cart/action'
const ProductDetail = () => {
    const[count,setCount]=useState(0)
    const {id}=useParams()
   
  const navigate=useNavigate()
    const ProductData = useSelector((state) =>state.AppReducer.data);
   
    const dispatch=useDispatch()
    
    const[currProduct,setcurrProduct]=useState({})
  
    useEffect(() => {
  dispatch(getdata())
    },[])

  
    useEffect(()=>{
  if(id){
    const temp=ProductData.find((ele)=>ele._id===(id))
    temp && setcurrProduct(temp)
  }
    },[ProductData,id])
   
  
  
    const handleBag=()=>{
      dispatch(addtocart({courseId:id})).then(()=>{
        alert("added to cart")
      })
    }
    const handleClick = () => {
      window.open("https://discussion-room-titan.netlify.app/", "_blank");
    }
    return (
      <Container maxW="container.2xl" mt={10}>
        <Container boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"  maxW="container.xl"margin="auto" key={currProduct?.id} >
        <HStack spacing="auto" p={10}>
          <Container>
            <Image src={currProduct?.photoUrl}/>
          </Container>
            <Container >
                <Heading p={2} width="100%">{currProduct?.name}</Heading>
                <Heading p={2} fontSize="large">Subject : {currProduct?.subject}</Heading>
                <Heading p={2} fontSize="large">Price : $ {currProduct?.price}</Heading>

              <Container pt={5} width="100%">
                  <Text  p={2}  >Course Duration : {currProduct?.duration}</Text>
                  <Text p={2}>Language : {currProduct?.langaage}</Text>
                  <Text p={2}>Level : {currProduct?.level}</Text>

              </Container>
             <Container pt={10}>
                <Button onClick={handleBag} colorScheme="green" width="100%">Add to cart</Button>
                  <HStack pt={2} >
                    <Text>Have doubts?</Text>
                    <Button onClick={handleClick}  colorScheme="red" width="60%">Ask now on live call</Button>
                  </HStack> 
             </Container>
            
          </Container>

        </HStack>
      
      </Container>
      </Container>
    )
  }
  
  export default ProductDetail
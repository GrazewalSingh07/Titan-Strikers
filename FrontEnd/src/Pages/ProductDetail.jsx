import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getdata } from '../Redux/App/action'
import {Box, Img, Button} from "@chakra-ui/react"
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
  
 
    console.log(currProduct)
  
  
    const handleBag=(id)=>{
      
    }
    return (
      <Box width="80%" margin="auto" key={currProduct.id} display="grid" gridTemplateColumns="repeat(2,1fr)">
        <Box>
        <Img src={currProduct.photoUrl}/>
        </Box>
        <Box marginTop="50px">
        <h3>{currProduct.name}</h3>
        <h3>{currProduct.price}</h3>
        <Button onClick={()=>handleBag(id)} width="70%"color="white" bg="blue.700">ADD TO CART</Button>
  
  <Button onClick={ ()=>setCount(count+1)}>+</Button>
  {count}
  <Button onClick={ ()=>setCount(count-1)}>-</Button>
  </Box>
  
      
            </Box>
    )
  }
  
  export default ProductDetail
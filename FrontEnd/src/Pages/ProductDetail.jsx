import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getdata } from '../Redux/App/action'
import {Box, Img, Button} from "@chakra-ui/react"
const ProductDetail = () => {
    const[count,setCount]=useState(0)
    const {_id}=useParams()
    //console.log(id)
  const navigate=useNavigate()
    const ProductData = useSelector((state) =>state.data);
  //console.log(ProductData)
    const dispatch=useDispatch()
    
    const[currProduct,setcurrProduct]=useState({})
  
    useEffect(() => {
  dispatch(getdata())
    },[])

  
    useEffect(()=>{
  if(_id){
    const temp=ProductData.find((ele)=>ele._id===Number(_id))
    temp && setcurrProduct(temp)
  }
    },[ProductData,_id])
  
  //console.log(ProductData)
    console.log(currProduct)
  
  
    const handleBag=(id)=>{
    //   navigate(`/Cart/${id}`)
    //   console.log(id)
    }
    return (
      <Box width="80%" margin="auto" key={currProduct.id} display="grid" gridTemplateColumns="repeat(2,1fr)">
        <Box>
        <Img src={currProduct.image_link}/>
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
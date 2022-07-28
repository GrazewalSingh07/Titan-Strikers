import { Container,Input,Button,Stack } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register } from "../Redux/Register/action"

export const Signup=()=>{
    const{ registering,registerSuccessfull, registerFailed}=useSelector((state)=>state.AuthReducer)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [data,setdata]=useState({
        "name":"",
        "email":"",
        "password":"",
        "profile":null
    })
    const handleSubmit=()=>{
        if(data.name&&data.email&&data.password&& data.profile){
      
            dispatch(register(data)).then(()=>{
                    navigate("/signin")
            })
        }else{
            alert("PLease fill all the fields")
        }
    }
    return <Container padding={10}  margin="auto" maxW="container.sm">
        <Stack spacing={5}>
        <Input onChange={(e)=>setdata({...data,name:e.target.value})} placeholder="name" value={data.name}/>
        <Input  onChange={(e)=>setdata({...data,email:e.target.value})}placeholder="email" value={data.email}/>
        <Input  onChange={(e)=>setdata({...data,password:e.target.value})}placeholder="password" value={data.password}/>
        <Input  accept="image/png" onChange={(e)=>setdata({...data,profile:e.target.files[0]})} type="file"/>
        </Stack>
        <Button onClick={handleSubmit}>Register</Button>
    </Container>
}
import { Container,Input ,Stack,Button,Heading} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import   { login } from "../Redux/Auth/action"

export const Signin=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [data,setdata]=useState({
        "email":"",
        "password":""
    })
    const handlelogin=()=>{
        if(data.email&& data.password){
            dispatch(login(data)).then(()=>{
                navigate("/")
            }).catch(()=>{
                alert("something went wrong try again")
                navigate("/signup")
            })
        }else{
            alert("please input email and password")
        }
    }
    return <Container margin="auto"  maxW="container.sm" p={10}>
        <Heading p={5}>Sign in</Heading>
       <Stack spacing={5}>
       <Input  onChange={(e)=>setdata({...data,email:e.target.value})}placeholder="email" value={data.email}/>
        <Input  onChange={(e)=>setdata({...data,password:e.target.value})}placeholder="password" value={data.password}/>
       </Stack>
       <Button onClick={handlelogin}>Login</Button>
    </Container>
}
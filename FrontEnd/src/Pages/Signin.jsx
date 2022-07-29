import { Container,Input ,Stack,Button,Heading,Image, HStack} from "@chakra-ui/react"
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
    return <Container margin="auto"  maxW="container.xl" p={10}>
        <HStack>
            <Container>
            <Heading p={5}>Sign in</Heading>
                <Stack spacing={5}>
                <Input  onChange={(e)=>setdata({...data,email:e.target.value})}placeholder="email" value={data.email}/>
                    <Input  onChange={(e)=>setdata({...data,password:e.target.value})}placeholder="password" value={data.password}/>
                </Stack>
                <Button width="100%" colorScheme="green" mt={10} onClick={handlelogin}>Login</Button>
                <Button width="100%" colorScheme="green" mt={10} onClick={()=>navigate("/signup")}>Don't have an account? Register Now</Button>
            </Container>
            <Image  p={50} width="50%" src="https://www.nicepng.com/png/detail/385-3851795_welcome-back-to-school-clipart-at-getdrawings-back.png"/>
        </HStack>
     
    </Container>
}
import { Container,Heading,HStack ,Image,Button} from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getpurchase } from "../Redux/PurchaseCourses/action"
export const Mycourse=()=>{
    const dispatch=useDispatch()
    const data= useSelector((state)=>state.purchasedReducer.mycourses)
    useEffect(()=>{
        dispatch(getpurchase())
    },[])
    const handleClick = () => {
      window.open("https://discussion-room-titan.netlify.app/", "_blank");
    }
    
    return <Container maxW="container.xl">
        <Heading p={5}>My Courses</Heading>
        {data?.map((el)=>{
          return  <Container cursor="pointer" maxW="container.2xl" mt={5} >
            <Container  boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"  maxW="container.xl" margin="auto" key={el.courseId._id} >
        <HStack spacing={10} p={10}>
              <Container width="30%"  >
                <Image width="100%" src={el.courseId.photoUrl}/>
              </Container>
         
            <Container width="100%" >
                <Heading p={2} fontSize="larger"width="100%">{el.courseId.name}</Heading>
                <Heading color="tomato" p={2} fontSize="large">Subject : {el.courseId.subject}</Heading>
                
            
          </Container >
          
          <Container>
           <HStack>
            <Button onClick={handleClick} colorScheme="blue">Ask doubts ( 8PM - 9PM )</Button>
              <Button onClick={handleClick} colorScheme="green">Live sessions( 3PM - 5PM )</Button>
           </HStack>

          </Container>
        </HStack>
      
      </Container>
        
        </Container>
        })}
    </Container>
}
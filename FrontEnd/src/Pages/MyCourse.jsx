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
      window.open("https://discussion-room-titan.netlify.app/?roomUrl=https%3A%2F%2Ftitan0.daily.co%2FsL7ZoRSg2xI7w4cp5pXU", "_blank");
    }
    
    return <Container maxW="container.xl">
        <Heading p={5}>My Courses</Heading>
        {data?.map((el)=>{
          return  <Container maxW="container.2xl" mt={5} >
            <Container  boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"  maxW="container.xl" margin="auto" key={el.courseId._id} >
        <HStack spacing="auto" p={10}>
          <Container>
            <Image width="30%" src={el.courseId.photoUrl}/>
          </Container>
            <Container >
                <Heading p={2} fontSize="larger"width="100%">{el.courseId.name}</Heading>
                <Heading p={2} fontSize="large">Subject : {el.courseId.subject}</Heading>
               
            
          </Container >
          
          <Container>
            <Button onClick={handleClick} colorScheme="green">Ask doubts in live sessions</Button>
          </Container>
        </HStack>
      
      </Container>
        
        </Container>
        })}
    </Container>
}
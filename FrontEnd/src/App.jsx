 
import { Box } from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import { Cart } from "./Pages/Cart"
import { Signin } from "./Pages/Signin"
import { Signup } from "./Pages/Signup"
function App() {
 

  return ( <Box>

       <Routes>
        <Route path="/" element={<Signup/>} ></Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Routes>

    </Box>
  )
}

export default App

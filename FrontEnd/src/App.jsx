
import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Courses from "./Pages/Courses"
import ProductDetail from "./Pages/ProductDetail"


import { Cart } from "./Pages/Cart"
import { Signin } from "./Pages/Signin"


 

 
 


 

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
     
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/courses/:id" element={<ProductDetail/>}/>
      
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Routes>
 
</>
  )
}

export default App

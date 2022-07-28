 
import Navbar from "./components/Navbar"
 
import Home from "./Pages/Home"
 
 
import Courses from "./Pages/Courses"
import ProductDetail from "./Pages/ProductDetail"
 
 
import {Routes,Route} from "react-router-dom"
import { Cart } from "./Pages/Cart"
import { Signin } from "./Pages/Signin"
import { Signup } from "./Pages/Signup"
import RequiredAuth from "./components/ReuiredAuth"
import { Mycourse } from "./Pages/MyCourse"
import { PaymentPage } from "./Pages/PaymenPgae"
 
 
 


 
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/payment/:sum" element={<PaymentPage/>}></Route>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/courses/:id" element={<ProductDetail/>}/>
      <Route path="/purchase-courses" element={<RequiredAuth><Mycourse/></RequiredAuth>} ></Route>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/cart" element={<RequiredAuth><Cart/></RequiredAuth>}/>
       </Routes>
 
    </>
  )
}

export default App

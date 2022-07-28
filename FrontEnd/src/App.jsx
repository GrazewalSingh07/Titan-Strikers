import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Courses from "./Pages/Courses"
import ProductDetail from "./Pages/ProductDetail"
 

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/courses/:id" element={<ProductDetail/>}/>
    </Routes>
    </>
  )
}

export default App

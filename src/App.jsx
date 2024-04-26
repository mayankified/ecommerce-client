// import Createprod from './Components/users/admin/Createprod'
import './Styles/App.css'
import Home from './Components/users/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import ForgotPassword from './Components/ForgotPassword';
import { Navbar } from './Components/Navbar';
import Footer from './Components/users/Footer';
import Catpage from './Components/users/Catpage';
import Productpage from './Components/users/Productpage';

const App = () => {
  return (
    // <div>App</div>


    <BrowserRouter>
    <Navbar/>
      <Routes>

        <Route path='/' element={<Home />} />
        {/* <Route path='/admin' element={<Createprod />} /> */}
        <Route path='/signup' element={<Signup />} />
       

        <Route path='/changepassword' element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products/:cat' element={<Catpage/>} />
        <Route path='/product/:id' element={<Productpage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
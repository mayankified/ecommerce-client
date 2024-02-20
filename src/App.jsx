import React from 'react'
import Createprod from './Components/admin/Createprod'
import './Styles/App.css'
import Home from './Components/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup  from './Components/Signup';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
const App = () => {
  return (
    // <div>App</div>


    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Createprod />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/changepassword' element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Home from './components/Home'
import Login from './components/Login'



function App() {
  return (
    <>
<BrowserRouter>



    <div className="container">
<Navbar/>
<Routes>
<Route path='/' element={<Register/>} />
<Route path='home' element={<Home/>} />
<Route path='/login' element={<Login/>} />



</Routes>




    </div>
 </BrowserRouter>   
    </>
  )
}

export default App
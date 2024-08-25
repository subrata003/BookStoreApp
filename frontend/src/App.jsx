import React from 'react'

import Course from './components/Course'
import Contact from './components/Contact'
import Home from './home/Home'
import Login from './components/Login'
import Register from './components/Register'

import { BrowserRouter, Route, Routes }from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   
    </BrowserRouter>
    
    </>
  )
}

export default App

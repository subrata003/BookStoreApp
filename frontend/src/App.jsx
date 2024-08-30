import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Home from './home/Home';
import Course from './components/Course';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import { useAuth } from './context/AuthProvider';

import style from './App.module.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [authUser] = useAuth(); // Use the authUser from the context

  return (
    <>
      <div className={`${style.app} ${theme === 'dark' ? style.dark : ''}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={authUser ? <Course /> : <Navigate to="/register" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Toaster /> {/* To show toast notifications */}
      </div>
    </>
  );
}

export default App;

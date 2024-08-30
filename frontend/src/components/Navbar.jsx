import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import style from "./Navbar.module.css"
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';
// import App from '../App';

function Navbar() {
  const[authUser,setartheruser]=useAuth()
  console.log(authUser);
  
  

const [theme, setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");

  const rootElement = document.documentElement;
  useEffect(() => {
    console.log(rootElement);


    if (theme === "dark") {
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark")
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark")
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };




  return (
    <div className={style.mainnav}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Subrata_BookStore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/course">Course</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        {/* <button onClick={toggleTheme} className={style.darkbtn}>
              {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button> */}
        
      </ul>
      
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {authUser?<Logout/>:<NavLink to="/login"><button class={`btn btn-outline-success ${style.btn}`} type="submit">LogIn</button></NavLink>
        }
      </form>
      
    </div>
  </div>
</nav>
      
    </div>
  );
}

export default Navbar;

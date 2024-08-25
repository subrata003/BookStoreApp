import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import style from "./Navbar.module.css"
import { NavLink } from 'react-router-dom';
;

function Navbar() {
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Subrata_BookStore</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${style.secdiv}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/course">Course</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>


            </ul>
            <button onClick={toggleTheme}>
              {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>


            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <NavLink to="/login">
              <button className={`btn  ${style.sbmt}`} type="submit">LogIn</button></NavLink>
            </form>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;

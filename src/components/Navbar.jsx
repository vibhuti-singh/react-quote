import React from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
    <div className="container">
      <a className="navbar-brand text-light " href="#">
        <img src={logo}  height="42"/> RandomQuotes
      </a>
    </div>
  </nav>
  )
}

export default Navbar

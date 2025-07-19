
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/form'>Login</Link>
            <Link to='/about'>Aboutus</Link>
            <Link to='/callbackProps'>CallbackProps</Link>
        </nav>
    </div>
  )
}

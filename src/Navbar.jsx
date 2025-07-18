
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/form'>Login</Link>
            <Link to='/about'>Aboutus</Link>
        </nav>
    </div>
  )
}

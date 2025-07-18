import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>This is my aboutUs page</h1>
        <Link to='company'>company</Link>
        <Link to='employee'>Employee</Link>
        <Outlet/>
    </div>
  )
}

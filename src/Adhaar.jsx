
import React, { useState } from 'react'
import './Adhaar.css'
export default function Adhaar({name,email}) {
    const[count,setCount]=useState(0);
  return (
    <div>
        <h1>{name}</h1>
       
        <button onClick={()=>setCount(count+1)}>Likes {count}</button>
        <p>{email}</p>
    </div>
  )
}

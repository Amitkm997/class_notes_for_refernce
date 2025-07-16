
import React, { useState } from 'react'
export default function Adhaar({name}) {
    const[count,setCount]=useState(0);
  return (
    <div>
        <h1>{name}</h1>
       
        <button onClick={()=>setCount(count+1)}>Likes {count}</button>
        <p></p>
    </div>
  )
}

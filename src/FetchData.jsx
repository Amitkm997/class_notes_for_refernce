

import React, { useState } from 'react'
import { useEffect } from 'react'
import Adhaar from './Adhaar'
export default function FetchData() {
    const[user,setUser]=useState([])
    console.log(user)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').
        then((res)=>res.json()).then((data)=>setUser(data)).
        catch((err)=>console.log(err))
    },[]) //[] ->dependency array (its an optional field)
  return (
    <>
     {
      user.map((cur)=><Adhaar name={cur.name}/>)
     }
    </>
  )
}

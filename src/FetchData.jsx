

import React, { useState } from 'react'
import { useEffect } from 'react'
export default function FetchData() {
    const[user,setUser]=useState({})
    console.log(user)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').
        then((res)=>res.json()).then((data)=>setUser(data)).
        catch((err)=>console.log(err))
    },[]) //[] ->dependency array (its an optional field)
  return (
    <>
      {
      user.length>0&&(
        <>
          <h1>{user[0].length}</h1>
          <h1>{user[1].length}</h1>
        </>
      )
        
      }
    </>
  )
}

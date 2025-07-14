
import React, { useState } from 'react'

export default function Form() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    console.log(name)
  return (
    <>
       <input type='text' 
       placeholder='Enter your name'
       value={name}
       onChange={(e)=>setName(e.target.value)}
       ></input><br /><br />
       <input type='email'
       placeholder='Enter your Email'
       valeu={email}
       onChange={(e)=>setEmail(e.target.value)}></input>
       <h1>Name:{name}</h1>
       <h1>Email:{email}</h1>
    </>
  )
}

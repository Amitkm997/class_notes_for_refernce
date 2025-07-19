
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'
export default function Form() {
  const navigate=useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState([])
  console.log(user)
  console.log(name)
  function submitHandler(e) {
    e.preventDefault() // prevents reloading
    if (name == '' || email == '' || password == '') return
    user.push({ name: name, email: email })
    // alert("form submitted successfully")
    navigate('/fetchData')
    setName('')
    setEmail('')
    setPassword('')
  }
  function handleDelete(index){
     let newArray=user.filter((_,i)=>i!=index);
     setUser(newArray)
  }
  return (
    <>
     
      <form onSubmit={submitHandler}>
        <h1>Register Yourself</h1>
        <input type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input><br /><br />
        <input type='email'
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}></input><br /><br />
        <input type='password'
          placeholder='Enter your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input><br /><br />
        <button type='submit'>Submit</button>
      </form>
      <h1>List of Submitted Users</h1>
      <ul>
        {user.map((cur,index)=>(
          <>
            <li key={index}>{cur.name} {cur.email} <button onClick={()=>handleDelete(index)}>delete</button> </li>
          </>
        ))}
      </ul>

    </>
  )
}

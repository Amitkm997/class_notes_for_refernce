
import React, { useState } from 'react'

export default function Form() {
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
    alert("form submitted successfully")
    setName('')
    setEmail('')
    setPassword('')
  }
  return (
    <>
      <form onSubmit={submitHandler}>
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
        {user.map((cur)=>(
          <>
            <li>{cur.name} {cur.email} <button>delete</button> </li>
            {/* <li></li> */}
          </>
        ))}
      </ul>

    </>
  )
}

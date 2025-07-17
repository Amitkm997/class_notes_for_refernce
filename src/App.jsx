import { useState } from 'react'
import Message from './Message'
import './App.css'
import Count from './Count'
import Form from './Form'
import List from './List'
import FetchData from './FetchData'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'
// import Welcome from './Welcome'
function App() {
  return (
    <>
    {/* <h1>This my first React prgramme</h1>
    <Welcome name="Amit" email="amitkm997@gmail.com"/>
    <Welcome name="Naman" email="naman@124"/> */}
    {/* <Welcome></Welcome> */}
    {/* <Message/> */}
    {/* <Count/> */}
    {/* <Form/> */}
    {/* <List/> */}
    {/* <FetchData/> */}
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path='/fetchData' element={<FetchData/>}></Route>
        <Route path='/count' element={<Count/>}/>
    </Routes>
    </>
  )
}

export default App

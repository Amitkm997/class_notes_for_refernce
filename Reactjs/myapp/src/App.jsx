import { useState } from 'react'
import Message from './Message'
// import './App.css'
import Count from './Count'
import Form from './Form'
import List from './List'
import FetchData from './FetchData'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Company from './component/Company'
import Employee from './component/Employee';
import CallbackProps from  './component/CallbackProps'
import  ContextProvider  from './context/CreateContext'
import DisplayContext from './controller/DisplayContext'
import CounterController from './controller/CounterController'
// import Welcome from './Welcome'
function App() {
  return (
    <>
    <ContextProvider>
      <DisplayContext/>
      <CounterController/>
    </ContextProvider>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path='/fetchData' element={<FetchData/>}></Route>
        <Route path='/count' element={<Count/>}/>
        <Route path='/about' element={<About/>}>
            <Route path='company' element={<Company/>}></Route>
            <Route path='employee' element={<Employee/>}></Route>
        </Route>
        <Route path='/callbackProps' element={<CallbackProps/>}/>
    </Routes>
    </>
  )
}

export default App

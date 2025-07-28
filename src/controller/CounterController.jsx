import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CreateContext'
export default function CounterController() {
    const{increment,decrement}=useContext(CounterContext)
  return (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

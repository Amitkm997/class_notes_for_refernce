import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CreateContext'
export default function DisplayContext() {
  const{count}=useContext(CounterContext);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

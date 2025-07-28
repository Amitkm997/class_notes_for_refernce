import React, { useState } from 'react'
import { createContext } from 'react'
export const CounterContext=createContext();
export default function ContextProvider({children}) {
    const[count,setCount]=useState(0);
    let increment =()=>setCount((n)=>n+1)
    let decrement=()=>setCount((n)=>n-1)
  return (
    <CounterContext.Provider value={{count,increment,decrement}}>
        {children}
    </CounterContext.Provider>
  )
}

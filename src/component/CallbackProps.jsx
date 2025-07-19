import React from 'react'

export default function CallbackProps() {
    function handleClick(value) {
        console.log(`Message from child ${value}`)
    }
    return (
        <div>
            <h1>This is my callback props component</h1>
            <Child onHandleClick={handleClick} />
        </div>
    )
}
function Child({ onHandleClick }) {
    return (
        <>
            <button onClick={() => onHandleClick("send from child")}>Click Me</button>
        </>
    )
}


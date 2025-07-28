import { useState } from "react";

function Message(){
    const[message,setMessage]=useState('hi there....') // message-current state value,setMessage-setup function
    console.log(message)
    return(

        <>
           <h1>{message}</h1>
           <button onClick={()=>setMessage("hello world")}>Change Message</button>
        </>
    )
}
export default Message;


// camel case -> setMessageCount
//pascal case->  SetMessageCount
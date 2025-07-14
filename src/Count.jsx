import { useState } from "react";
function Count(){
   const[count ,setCount]=useState(0)
   console.log(count)
    return(
        <>
           <h1>Count{count}</h1>
           <button onClick={()=>setCount(count+1)}>Increment</button>
           <button>decreament</button>
           <button>reset</button>
        </>
    )
}
export default Count;
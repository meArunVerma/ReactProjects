import { useState } from "react";
function Example(){
    const [msz,setMsz] = useState("")
    return <>
        <h1>{msz}</h1>
        <input type="text" onMouseOver={()=>setMsz('Enter Your Name')}/>
        <br></br>
        
        <input type="text" onMouseOver={()=>{setMsz('Enter Your Email')}}/>

        <br></br>
        
        <input type="text" onMouseOver={()=>{setMsz("Enter Your Phone Number")}}/>
    </>
}
export default Example;
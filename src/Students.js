import { useState } from "react";

function Student(props){
     console.log('Re rendering')
     const [language,setLanguage]=useState('C++')
     function changeElement(){
         document.getElementById('hd').innerHTML='Really';
    }
    function updateLanguage(){
        setLanguage('React')
    }
    return <>
      <h2 id='hd'>language : {language} </h2>
      <h2>I am learning : {props.language}</h2>
      <h2>My Qualification is : BCA</h2>
      <button id='btn' onClick={changeElement}>Click Me !</button>
      <button onClick={updateLanguage}>Change Language</button>
    </>
}



export default Student;
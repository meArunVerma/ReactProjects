import {useState} from 'react';

function ContactForm(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [course,setCourse] = useState("");
    const [query,setQuery] = useState("");
    const handlesubmit = (e)=>{
        e.preventDefault()
        alert(
            `Name :${name} \n
            Email :${email}\n
            Mobile :${mobile}
            Course : ${course}
            Query : ${query}`
        )
        document.getElementsByTagName('form')[0].submit()
    }

    return (
        <>
           <div className='form-container'>
                <form onSubmit={handlesubmit}>
                    <div className='field'>
                        <label for='name'>Name : </label>
                        <input type='text' 
                           value={name}
                           onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className='field'>
                         <label for='email'>Email : </label>
                         <input type='email' 
                            value = {email}
                            onChange={(e)=>setEmail(e.target.value)}
                         />
                    </div>
                    <div className = 'field'>
                         <lebel for='mobile'>Mobile : </lebel>
                         <input type = 'text'
                             value = {mobile}
                             onChange={(e)=>setMobile(e.target.value)}
                         />
                    </div>
                    <div className='field'>
                        <label for='course'>Course : </label>
                        <select value={course}
                                onChange ={(e)=>setCourse(e.target.value)}
                         >
                            <option value='java'>Java</option>
                            <option value='c++'>C++</option>
                            <option value='python'>Python</option>
                        </select>
                    </div>
                    <div className='field'>
                        <textarea value={query} 
                          onChange={(e)=>setQuery(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='field'>
                        <input type='submit' value='Submit'/>
                    </div>
                </form>
           </div>
        </>
    );
}

export default ContactForm;
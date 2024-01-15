import React from 'react'
import { useState } from 'react'
const Form = () => {
    const [currInput, setcurrInput] = useState([])
    const [curPass,setPass] =useState([]);
  
    const handleLogin =(e)=>{
     e.preventDefault();
     
    }


  return (
 
<div className='mx-10 flex-col justify-center items-center py-6 p-3 my-10  w-fit h-full'>
   <h2 className='text-purple-400 text-thin '>USER LOGIN</h2>
    <form >
        <div>
        <input type = 'text' 
    value={currInput}    
    onChange={e=> setcurrInput(e.target.value)} 
    className='mt-4 font-light border-none rounded-full text-sm p-1 px-2'   
    placeholder='USERNAME'  
   />
</div>
 
<div>
<input type = 'text' 
    value={curPass}    
    onChange={e=> setPass(e.target.value)} 
    className='mt-4 border-none rounded-full text-sm  font-light p-1 px-2'   
    placeholder='USERNAME'  
   />
</div>

<div className>
 <button onClick={handleLogin}
  className='mt-4 border-none rounded-full text-sm  text-white px-3 py-1  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400'>Login</button>
</div>


    </form>
</div>
    
  )
}

export default Form
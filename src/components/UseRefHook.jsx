import React, { useRef } from 'react'

function UseRefHook() {

    const inputRef = useRef()
    const handleClick=()=>{
        inputRef.current.focus();
        inputRef.current.style.color="red";
        
    }

  return (
   <>
   <h2>3) UseRef Hook</h2>
    <input type="text"  ref={inputRef} />
    <button onClick={handleClick}>Focus Input</button>
   </>
  )
}

export default UseRefHook
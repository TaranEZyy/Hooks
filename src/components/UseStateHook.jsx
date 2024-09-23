import { useCallback, useState } from 'react'

function UseStateHook() {

    const [count,setCount]=useState(0)
    const Decrement=useCallback(()=>{
      if(count==0){
        setCount(0);
      }else{
        setCount(count-1);
      }
    })

    const [color,setColor]=useState("orange")

  return (
    <>
    <h2>1) <u>Use State Hook</u></h2>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)} >Increment</button>
      <button onClick={Decrement} >Decrement</button> <br /><br />
      <div style={{backgroundColor: color, height: "50vh"}}>
            <button onClick={()=>setColor("pink")} >Pink</button>
            <button onClick={()=>setColor("green")} >Green</button>
            <button onClick={()=>setColor("blue")} >blue</button>
      </div>

     

    </>
  )
}

export default UseStateHook

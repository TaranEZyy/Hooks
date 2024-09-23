import React, { forwardRef, useRef, useImperativeHandle, useState, useEffect } from 'react';
import { Button } from '@mui/material/';

function UseImperativeHandle() {

    const ref = useRef()
    const [naam, setNaam] = useState(null); // State to hold the value of naam



//Child Component
    const Child = forwardRef((props, ref) => {

        useImperativeHandle(ref,()=>{
            return{
                hi:sayHi,
                naam:name,
            }
        })

        const sayHi = () => {
          console.log("Hi.. I am the child");
        };
        const name="Taran"
      });

      // This useEffect is a part of parent Component 
      useEffect(() => {
        if (ref.current) {
          setNaam(ref.current.naam); // Set the naam in state after ref is available
        }
      }, [ref]);

  return (

    <div>
                  <h2>5) <u> useImperativeHandle </u></h2>
            <Child ref={ref} />
            <Button variant="contained" onClick={() => ref.current.hi()}>UseImperativeHandle</Button>
            {naam ?<div>{naam}</div>:<div>No Name.....</div>}

    </div>
  )
}

export default UseImperativeHandle
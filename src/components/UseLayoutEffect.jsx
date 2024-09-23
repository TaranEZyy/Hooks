import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function UseLayoutEffect() {  
 
  useLayoutEffect(() => {
    console.log("This is useLayout Effect")
  }, []); 

  useEffect(() => {
    console.log("This is useEffect")
  }, []);



  return (
    <div>
        <h2><b> 2) useLayoutEffect(Before Render) is faster then useEffect(During Render)</b></h2>
    </div>
  );
}

export default UseLayoutEffect;

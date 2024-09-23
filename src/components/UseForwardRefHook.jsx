import React, { forwardRef, useRef } from 'react';
import TextField from '@mui/material/TextField';

// Parent component
function ParentComponent() {
 
    const inputRef = useRef(null);

    // Child component receiving the ref using forwardRef
    const CustomInput = forwardRef((props, ref) => {
        return (
            <TextField
            label="Search input"
            inputRef={ref} 
          />
        )
    });

    const focusInput = () => {
        inputRef.current.focus();  // Access the ref of the child component (input element) and focus it
    };



  return (
        <div>
            <h2>4) <u>UseForwardRef Hook</u></h2>
        <CustomInput ref={inputRef} /> {/* Passing the ref to the child */}
        <button onClick={focusInput}>Focus the Input</button>
        </div>
  );
}

export default ParentComponent;

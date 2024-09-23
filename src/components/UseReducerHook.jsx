import React, { useReducer } from 'react'
import { Button } from '@mui/material/';


function UseReducerHook() {

    function reducer(state,action){
        switch(action.type){
            case "INCREMENT":
                return { count: state.count + 1 };
            case "DECREMENT":
                if (state.count==0) {
                     state.count=0;
                  } else {
                    return { count: state.count - 1 };
                  }
            default:
                return state; 
        }
    }

    const [state,dispatch] = useReducer(reducer,{count:0});

  return (
    <div>
        Count: {state.count}
        <Button variant="contained" onClick={()=>{dispatch({type:"INCREMENT"})}} >Increment</Button>
        <Button variant="contained" onClick={()=>{dispatch({type:"DECREMENT"})}} >Decrement</Button>
    </div>
  )
}

export default UseReducerHook
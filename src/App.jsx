import './App.css'
import UseStateHook from './components/UseStateHook'
import UseLayoutEffect from './components/UseLayoutEffect'
import UseRefHook from './components/UseRefHook'
import UseForwardRefHook from './components/UseForwardRefHook'
import UseImperativeHandle from './components/UseImperativeHandle';
import UseReducerHook from './components/UseReducerHook';
import LifeCycle from './components/LifeCycle';




function App() {

  return (
    <>
      <UseStateHook/> <br /> <br />
      
      <UseLayoutEffect/>
      <UseRefHook/>
      <UseForwardRefHook/>
      <br /><br />
      <UseImperativeHandle/>
      <br /><br />
      <UseReducerHook/>
      <br /><br />
      <LifeCycle/>


      
    </>
  )
}

export default App

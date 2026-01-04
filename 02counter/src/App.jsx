import { useState } from 'react'   //hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)  //can give true, false value, ' ' empty value, [],{},'deepak' etc.

  // let counter = 50

  const addValue = () => {
    // console.log("value added", Math.random());
    console.log("clicked", counter);

    counter = counter + 1
    setCounter(counter)  //new value to be added 
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

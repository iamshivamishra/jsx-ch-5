import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'
import Wrapper from './Wrapper.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

    // ==> More about props
    // Default props
    // Press Jsx with props
    // Change style with props
    // interview question

    <div>
      <h1>Props in react js</h1>
      {/* <User name = "Shivam"/>
    <User name = "Sam"/> */} 
      <Wrapper color = "orange">
        <h1>Hellow Every-one</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hellow Sahil</h1>
        <h2 style={{color:"red"}}>This is coading</h2>
      </Wrapper>

      <Wrapper color = "orange">
        <h1>Hellow Every-one</h1>
      </Wrapper>
    </div>
  )
}

export default App

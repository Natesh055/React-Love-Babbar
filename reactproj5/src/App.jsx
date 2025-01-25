import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
const[name,setname] = useState('')
  return (
    <>
      <Card name = {name} setname={setname}/>
      <p>I am inside parents component</p>
      <p>{name}</p>

    </>
  )
}

export default App

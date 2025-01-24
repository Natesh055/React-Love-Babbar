import { useState } from 'react'
import './App.css'
import Card from './assets/Card'

import Button from './assets/Button';


function App() {
const[count,setcount] = useState(0);

function handleclick(){
  setcount(count+1);
}
  return (
    <>
    {/* we are sending props from this,an alternate si shown below */}
    <Card name = "Natesh" >
    <h1>Indian Navy</h1>
    <p>The best navy</p>
    </Card>

    <Card children="My name is Natesh">
    </Card>

<Button incrementcount = {handleclick} text = "Click Me" >
  <h1>{count}</h1>
  </Button>
    </>
  )
}

export default App

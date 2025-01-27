import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  // const [count, setCount] = useState(0)
  // const [total, setTotal] = useState(0)

  // function handleclick(){
  //   setCount(count+1);
    
  // }
  // function handleclicktotal(){
  //   setTotal(total+1);
  // }





  // useEffect(()=>{ //this by default runs on every render
  //   console.log("Something changed");
  // },[])

  // useEffect(()=>{ //this by default runs on every render
  //   alert("I will run on only first render");
  // },[])

  // useEffect(()=>{ //this by default runs on every render
  //   console.log("It will  run on evevery increment of count");
  // },[count])


  //multiple dependencies
  // useEffect(()=>{ //this by default runs on every render
  //   console.log("It will  run on evevery increment of count and total");
  // },[count,total])



  // useEffect(()=>{
  //   alert("Count is updated");

  //   return ()=>{
  //     alert("Count is unmounted")
  //   }
  // },[count])





  // useEffect(()=>{
  //   first

  //   return ()=>{
  //     second
  //   }

  // },[third])//dependency list on basisi of which the function is clalled
  // // runs on every render

  return (
    <>
        {/* <p>Hello Everyone</p>
        <button onClick={handleclick} >Count +1</button>
        <p>{count}</p>
        <br />
        <button onClick={handleclicktotal} >Total +1</button>
        <p>{total}</p> */}
    </>
  )
}

export default App

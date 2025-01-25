import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
function handleclick(){
alert("I am clicked")
}
function handlmouseover(){
  alert("mouse on the paragraph")
}
function handleinputchange(e){
console.log(e.target.value);
}
function handlesubmit(e){
  // console.log('Form submitted');
  // e.preventDefault();
  console.log('form submitted')
}
  return (
    <>
      <div>
        <form action="" onSubmit={handlesubmit}>
          <input type="text" name="" id="" onChange={(e) =>handleinputchange(e)} />
        </form>
        {/* <p onMouseOver={handlmouseover}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo voluptatum vitae voluptatem, ad earum quasi, iste libero totam tempora dolore adipisci veniam, saepe velit?</p>
        <button onClick={handleclick}>Click Me</button> */}
        <button  type='submit'>Submit</button>
      </div>

      <button onClick={()=>{alert("Button Clicked")}}>Click Me</button>
    </>
  )
}

export default App

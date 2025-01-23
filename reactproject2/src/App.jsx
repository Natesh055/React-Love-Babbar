import React from 'react'
import UserCard from './components/usercard'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <UserCard name= 'Natesh' />
      <UserCard name= 'Mummy'/>
      <UserCard name= 'Papa' />
    </div>
  )
}

export default App

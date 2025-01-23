import React from 'react'
import pic from '../assets/aa.png'
import './usercard.css'
const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='title'>{props.name}</p>
      {/* <img src={pic} alt="" id='user-image'/> */}
      <p id='user-description'>Description of {props.name}</p>
    </div>
  )
}

export default UserCard
//kahi aur use karna hai to export karvana hi padhega

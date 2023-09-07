import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/")
  }

  return (
    <div>
      Support
      <button className='border border-black' onClick={clickHandler}>Go to Home</button>  
    </div>
  )
}

export default Support
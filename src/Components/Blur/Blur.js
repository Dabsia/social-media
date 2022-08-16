import React from 'react'
import './Blur.css'

const Blur = () => {
  return (
      <div>
          <div className='blur' style = {{top: '-18%', right: '0'} }></div>
          <div className='blur' style = {{top: '36%', left: '-8rem'} }></div>
      </div>
  )
}

export default Blur
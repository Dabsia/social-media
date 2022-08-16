import React from 'react'
import { FiEdit2 } from 'react-icons/fi'
import './InfoCard.css'

const InfoCard = () => {
  return (
      <div className = 'infoCard'>
          <div className='infoHead'>
              <h4>Your Info</h4>
              <FiEdit2 className = 'edit' />
          </div>
          <div className = 'info'>
              <span><b>Status{' '}</b></span>
              <span>In a Relationship </span>
          </div>

          <div className = 'info'>
              <span><b>Lives In{' '} </b></span>
              <span>London</span>
          </div>

          <div className = 'info'>
              <span><b>Works at {' '}</b></span>
              <span>Google</span>
          </div>

            <button className = 'logoutbutton logout'>Logout</button> 

      </div>
  )
}

export default InfoCard
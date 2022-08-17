import React, {useState} from 'react'
import { FiEdit2 } from 'react-icons/fi'
import './InfoCard.css'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {


    const [isModalOpened, setIsModalOpened] = useState(false)

    const openModal = () => {
        setIsModalOpened(true)
    }

  return (
      <div className = 'infoCard'>
          <div className='infoHead'>
              <h4>Your Info</h4>
              <FiEdit2 onClick = {openModal} className = 'edit' />
          </div>
          <ProfileModal isModalOpened = {isModalOpened} setIsModalOpened = {setIsModalOpened} />
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
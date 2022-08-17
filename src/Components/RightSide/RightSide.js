import React, {useState} from 'react'
import './RightSide.css'
import Home from '../../Assets/home.png'
import Noti from '../../Assets/noti.png'
import Comment from '../../Assets/comment.png'
import {AiOutlineSetting} from 'react-icons/ai'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'

const RightSide = () => {

    const [isModalOpened, setIsModalOpened] = useState(false)

    const openModal = () => {
        setIsModalOpened(true)
    }

  return (
      <div className='rightSide'>
          <div className='navIcons'>
              <img src={Home} alt='home' />
              <AiOutlineSetting />
              <img src={Noti} alt='noti' />
              <img src={Comment} alt='comment' />
          </div>
          <TrendCard />
          <button className='sh-button' onClick={openModal}>Share</button>
          <ShareModal isModalOpened = {isModalOpened} setIsModalOpened = {setIsModalOpened}/>
      </div>
  )
}

export default RightSide
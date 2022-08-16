import React from 'react'
import './RightSide.css'
import Home from '../../Assets/home.png'
import Noti from '../../Assets/noti.png'
import Comment from '../../Assets/comment.png'
import {AiOutlineSetting} from 'react-icons/ai'
import TrendCard from '../TrendCard/TrendCard'

const RightSide = () => {
  return (
      <div className='rightSide'>
          <div className='navIcons'>
              <img src={Home} alt='home' />
              <AiOutlineSetting />
              <img src={Noti} alt='npti' />
              <img src={Comment} alt='comment' />
          </div>
          <TrendCard />
          <button className = 'sh-button'>Share</button>
      </div>
  )
}

export default RightSide
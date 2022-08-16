import React from 'react'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'
import './Home.css'

const Home = () => {
  return (
      <div className = 'home'>
          <ProfileSide />
          <PostSide />
          <div className = 'RightSide'>Trending</div>
      </div>
  )
}

export default Home
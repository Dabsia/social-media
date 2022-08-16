import React from 'react'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import './Profile.css'

const Profile = () => {
  return (
      <div className='profile'>
          <ProfileLeft />
          <div className='profile-center'>
              <ProfileCard  />
              <PostSide />
          </div>
      </div>
  )
}

export default Profile
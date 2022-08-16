import React from 'react'
import Cover from '../../Assets/cover.jpg'
import Profile from '../../Assets/dabo.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className = 'profileCard'>
          <div className='profileImages'>
              <img className = 'coverImage' src={Cover} alt='cover' />
              <img className = 'profileImage' src = {Profile} alt = 'profile' />
          </div>
          <div className='profileName'>
            <span className = 'name'>Dabsia Johnson</span>
            <span className = 'role'>Senior Software Deveoper</span>
          </div>
          <div className='followstatus'>
              <hr />
              <div>
                  <div className='follow'>
                      <span className = 'followNum'>1,100</span>
                        <span className = 'followDesc'>Following</span>
                  </div>
                  <div className  = 'vl' />
                  <div className='follow'>
                      <span className = 'followNum'>12,000</span>
                        <span className = 'followDesc'>Followers</span>
                  </div>
              </div>
            <hr />
          </div>
          <span className = 'myProfile'>
            My Profile
          </span>
    </div>
  )
}

export default ProfileCard

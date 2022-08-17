import React from 'react'
import Cover from '../../Assets/cover.jpg'
import Profile from '../../Assets/dabo.jpg'
import './ProfileCard.css'
import { Link } from 'react-router-dom'

const ProfileCard = ({profilePanel}) => {
  
  return (
    <div className = 'profileCard'>
          <div className='profileImages'>
              <img className = 'coverImage' src={Cover} alt='cover' />
              <img className = 'profileImage' src = {Profile} alt = 'profile' />
          </div>
          <div className='profileName'>
            <span className = 'name'>Dabsia Johnson</span>
            <span className = 'role'>Software Engineering</span>
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
          
          
            {profilePanel && (
              <>
                <div className='vl' />
                 <div className='follow'>
                      <span className = 'followNum'>3</span>
                        <span className = 'followDesc'>Posts</span>
                  </div>
              </>
            )}
          
              </div>
            <hr />
      </div>
      {profilePanel ? '' : 
        <Link className = 'link' to = '/profile' >
          <span className = 'myProfile'>
            My Profile
          </span>
        </Link>
      }
    </div>
  )
}

export default ProfileCard

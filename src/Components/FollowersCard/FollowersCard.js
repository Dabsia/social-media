import React from 'react'
import './FollowersCard.css'
import { Followers } from './FollowersData'

const FollowersCard = () => {
  return (
    <div className = 'followersCard'>
          <h3>Who is following you</h3>
          {
              Followers.map((follower, id) => {
                  return (
                      <div key = {id} className='follower'>
                          <div>
                              <img className='followerImg' src={follower.img} alt={follower.name} />
                              <div className = 'followerNameContainer'>
                                  <span className = 'followerName'>{follower.name}</span>
                                  <span>{ follower.username}</span>
                              </div>
                              </div>
                              <button className = 'followBtn fc-button'>Follow</button>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default FollowersCard

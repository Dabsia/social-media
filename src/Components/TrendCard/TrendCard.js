import React from 'react'
import { TrendData } from './TrendData'
import './TrendCard.css'

const TrendCard = () => {
  return (
      <div className='trendCard'>
          <h3>Trends for you</h3>
          
          {
              TrendData.map((trend, id) => {
                  return (
                      <div className = 'trend' key={id}>
                          <span className = 'trendName'>#{trend.name}</span>
                          <span>{trend.shares}K shares </span>
                      </div>
                  )
              })
          }
      </div>
  )
}

export default TrendCard
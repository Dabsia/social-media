import React from 'react'
import './LogoSearch.css'
import logo from '../../Assets/logo.png'
import {AiOutlineSearch} from 'react-icons/ai'

const LogoSearch = () => {
  return (
      <div className = 'logoSearch'>
          <img src={logo} alt='logo' />
          <div className = 'search'>
              <input type='text' placeholder='#Explore' />
              <div className = 's-icon'>
                <AiOutlineSearch />
              </div>
          </div>
      </div>
  )
}

export default LogoSearch
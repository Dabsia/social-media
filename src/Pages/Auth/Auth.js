import React from 'react'
import './Auth.css'
import Logo from '../../Assets/logo.png'
import Authentication from '../../Components/Authentication/Authentication'

const Auth = () => {
  return (
    <div className = 'auth'>
          <div className = 'a-left'>
              <img src={Logo} alt='logo' />
              <div className = 'webName'>
                  <h1>Dabsia Media</h1>
                  <h6>Explore ideas around the world</h6>
              </div>
          </div>
          <Authentication />
      </div>
  )
}


export default Auth

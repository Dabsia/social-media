import React from 'react'
import './App.css'
import Blur from './Components/Blur/Blur'
import Home from './Pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Profile from './Pages/Profile/Profile'
import Auth from './Pages/Auth/Auth'

const App = () => {
  return (
    <div className = 'App'>
      <Blur />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path = '/profile' element = {<Profile/>} />
        <Route path = '/auth' element = {<Auth/>} />
      </Routes>
    </div>
  )
}

export default App
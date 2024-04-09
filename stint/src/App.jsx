import React from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className='container'>
    <Navbar/>
    <div className='sub-container'>
    <LandingPage/>
    </div>
    </div>
  )
}

import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './css/LandingPage.css'

function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='land-container'>
        <div className='main-bar'>
        <input type='text' className='main-search' placeholder='🔎 Search...'/>
        </div>
        <div className='main-tabs'>
            <div>
                All Tasks
            </div>
            <div>
                All Tasks
            </div>
            <div>
                All Tasks
            </div>
            <div>
                All Tasks
            </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage

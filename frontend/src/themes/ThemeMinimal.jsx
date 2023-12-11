import React from 'react'
import '../App.css'
import Sidebar from '../components/Sidebar'
import Contents from '../components/Contents'
const ThemeMinimal = () => {
  return (
    <div className='app2 h-screen w-screen bg-white  flex'>
       <Sidebar />
       <Contents />
    </div>
  )
}

export default ThemeMinimal
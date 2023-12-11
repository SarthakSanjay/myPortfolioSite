import React from 'react'
import Sidebar from '../components/Sidebar'
import Contents from '../components/Contents'

const ThemeNuts = () => {
  return (
    <div className='h-screen w-screen bg-red-700 '>
        <Sidebar />
        <Contents />
    </div>
  )
}

export default ThemeNuts
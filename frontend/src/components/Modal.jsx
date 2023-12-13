import React, { useContext } from 'react'
import { myContext } from '../context/context'

const Modal = () => {
    const {type , updateModal} = useContext(myContext)
    const handleClick = () => {
        updateModal()
    }
  return (
    <div className='h-screen w-screen '>
    
    <button className='absolute top-2 right-5 border px-5 py-1 rounded-lg text-white ' 
    onClick={handleClick}
    >Back</button>
        {type}
    </div>
  )
}

export default Modal
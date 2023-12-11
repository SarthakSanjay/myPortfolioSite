import React, { useContext, useState } from 'react'
import { myContext } from '../context/context'
const Contents = () => {
    const {type} = useContext(myContext)
  return (
    <div className='h-screen w-5/6 flex justify-center items-center'>
     {type}
    </div>
  )
}

export default Contents
import React, { useContext, useState } from 'react'
import { myContext } from '../context/context'
const Contents = () => {
    const {type} = useContext(myContext)
  return (
    <div className='h-fit lg:h-screen w-full lg:w-5/6 hidden lg:flex justify-center items-center'>
     {type}
    </div>
  )
}

export default Contents
import React from 'react'

const SkillBox = ({item}) => {
  return (
    <div
     className='h-[40px] w-[120px]  text-white border-[1px] bg-opacity-10 flex justify-center items-center rounded-lg opacity-50 hover:opacity-100'
     style={{
        borderColor: `${item.color}`,
        boxShadow: `0px 0px 10px 5px ${item.color}`,
     }}
     >{item.name}</div>
  )
}

export default SkillBox
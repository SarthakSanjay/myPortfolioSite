import React from 'react'
import { skills } from '../utils/skills'
import SkillBox from './SkillBox'
const Skills = () => {
  return (
    <div className='h-full w-full p-[50px] flex justify-center items-center flex-col gap-5 '>
        <div className='h-1/2 w-full bg-black bg-opacity-50 rounded-2xl flex flex-col p-[20px] '>
        <h1 className='h-1/6 text-3xl text-white '>FRONTEND</h1>
        <div className='h-5/6 flex flex-wrap gap-5 p-[20px] text-xl '>
            {
                skills.frontend.map((item,index) =>{
                    return <SkillBox key={index} item={item} />
                })
            }

        </div>
        </div>
        <div className='h-1/2 w-full bg-black bg-opacity-50 rounded-2xl flex flex-col p-[20px] '>
        <h1 className='h-1/6 text-3xl text-white '>BACKEND</h1>
        <div className='h-5/6 flex flex-wrap gap-5 p-[20px] text-xl '>
            {
                skills.backend.map((item, index) =>{
                    return <SkillBox key={index} item={item} />
                })
            }

        </div>
        </div>
    </div>
  )
}

export default Skills
import React from 'react'
import { skills } from '../utils/skills'
import SkillBox from './SkillBox'
const Skills = () => {
  return (
    <div className='h-fit lg:h-full w-full mt-5 lg:mt-0 p-[10px] lg:p-[50px] lg:flex justify-center items-center flex-col  lg:gap-5 '>
    {/* forntend */}
        <div className='h-1/2 w-full my-5 lg:my-0 bg-black  bg-opacity-50 rounded-2xl flex flex-col p-[20px] '>
        <h1 className='h-1/6 text-2xl lg:text-3xl text-white ml-[20px]'>FRONTEND</h1>
        <div className='h-5/6 flex flex-wrap gap-5 p-[20px] text-xl '>
            {
                skills.frontend.map((item,index) =>{
                    return <SkillBox key={index} item={item} />
                })
            }

        </div>
        </div>
        {/* backend */}
        <div className='h-1/2 w-full my-5 lg:my-0 bg-black  bg-opacity-50 rounded-2xl flex flex-col p-[20px] '>
        <h1 className='h-1/6 text-2xl lg:text-3xl text-white ml-[20px]'>BACKEND</h1>
        <div className='h-5/6 flex flex-wrap gap-5 p-[20px] text-xl '>
            {
                skills.backend.map((item, index) =>{
                    return <SkillBox key={index} item={item} />
                })
            }

        </div>
        </div>
        {/* database */}
        <div className='h-1/2 w-full my-5 lg:my-0 bg-black  bg-opacity-50 rounded-2xl flex flex-col p-[20px] '>
        <h1 className='h-1/6 text-2xl lg:text-3xl text-white ml-[20px]'>DATABASE</h1>
        <div className='h-5/6 flex flex-wrap gap-5 p-[20px] text-xl '>
            {
                skills.database.map((item, index) =>{
                    return <SkillBox key={index} item={item} />
                })
            }

        </div>
        </div>
    </div>
  )
}

export default Skills
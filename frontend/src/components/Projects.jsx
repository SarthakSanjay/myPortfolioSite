import React from 'react'
import { projects } from '../utils/project'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <div className='h-fit lg:h-full w-screen mt-12 lg:mt-0 lg:w-full px-3 py-3 lg:px-[50px] lg:py-[30px] '>
    <div className=' lg:h-full w-full p-[20px]  rounded-2xl bg-opacity-50  flex flex-col lg:flex-row lg:flex-wrap gap-[20px] justify-center bg-black '>

        {
            projects.map((item ,index) =>{
                return <ProjectCard key={index} item={item} />
            })
        }
    </div>
    </div>
  )
}

export default Projects
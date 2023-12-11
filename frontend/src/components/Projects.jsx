import React from 'react'
import { projects } from '../utils/project'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <div className='h-full w-full px-[50px] py-[30px] '>
    <div className='h-full w-full p-[20px] rounded-2xl bg-opacity-50  flex flex-wrap gap-[20px] justify-center bg-black '>

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
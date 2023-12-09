import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const project = [
        {
            name:"F L I X O N",
            tech:[
                "Html", "css" , "js" , "MovieDb Apis"
            ],
            link:"https://flixon.vercel.app/",
            image:"../src/assets/sc1.png"
        },
        {
            name:"S N K R S",
            tech:[
                "React", "Mongoose" , "Express" , "Node" ,"Redux" ,"Tailwind"
            ],
            link:"https://github.com/SarthakSanjay/SNKRS_MERN_app"
        },
    ]
  return (<>
    <h1 style={{position:'absolute' , top:'0', left:'50%'}}>PROJECTS</h1>
    <div className='projects' style={{display:'flex',flexWrap:'wrap' ,gap:'20px'}}>
        {
            project.map((items) =>{
                return <ProjectCard items={items} />
            })
        }
    </div>
  </>
  )
}

export default Projects
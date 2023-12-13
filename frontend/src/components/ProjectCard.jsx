import React, { useState } from 'react';
import Button from './Button.jsx'
import sc2 from '../assets/sc2.png'
const ProjectCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    
      <div
        className='h-1/3 lg:w-1/3 rounded-xl border-[1px] border-violet-500 text-white text-2xl bg-black relative'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      <img className='h-full w-full bg-center rounded-2xl' src={sc2} />
      <div className='h-1/4 hidden lg:flex flex-wrap gap-1  rounded-b-2xl p-[10px]'>
     
        {
            item.tech.map((eachTech,index) =>{
                {/* let borderColor = `border-${eachTech.color}-500` */}
                {/* console.log(borderColor) */}
                return <span key={index} className={`h-8 w-max py-1 px-3 rounded-xl flex justify-center items-center bg-black bg-opacity-80 border-[1px] border-${eachTech.color}-500 text-[12px] opacity-50 hover:opacity-100`}
                style={{ borderColor: `${eachTech.color}`}}
                 >
                    {eachTech.name}
                </span>
            })
        }
      </div>
        {isHovered && (
          <div className='absolute inset-0 bg-opacity-90 rounded-2xl bg-black text-center flex flex-col justify-between p-[20px]'>
            <h1>{item.name}</h1>
            <div className='flex w-full justify-center text-xl'>
                <Button name="Details" fromProjects='true' />
                <a href={item.link}>
                <Button  name="Visit" fromProjects='true' />
                   
                </a>
            </div>
          </div>
        )}
      </div>

  );
};

export default ProjectCard;

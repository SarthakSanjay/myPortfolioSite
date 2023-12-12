import React from 'react';
import { FaNodeJs, FaHtml5, FaCss3, FaGit } from "react-icons/fa";
import { SiAxios ,SiExpress, SiJavascript, SiMongodb, SiMongoose, SiReact } from "react-icons/si";
const SkillBox = ({ item }) => {
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'html':
        return <FaHtml5 />;
      case 'css':
        return <FaCss3 />;
      case 'javascript':
        return <SiJavascript />;
      case 'react':
        return <SiReact />;
      case 'axios':
        return <SiAxios />;
      case 'node.js':
        return <FaNodeJs />;
      case 'mongodb':
        return <SiMongodb />;
      case 'mongoose':
        return <SiMongoose />;
      case 'express':
        return <SiExpress />;
      case 'git':
        return <FaGit />;
      default:
        return null;
    }
  };

  return (
    <div
      className='h-[100px] w-[120px] text-white border-[1px] bg-opacity-10 flex flex-col justify-center items-center rounded-lg opacity-50 hover:opacity-100'
    
    >
    <div className='text-3xl flex justify-center items-center flex-col' style={{
        
        color: `${item.color}`,
        filter: `
         drop-shadow(0 0 10px ${item.color})
          drop-shadow(0 0 20px ${item.color})
           `
}}>

      {getIcon(item.name)}
    </div>
      <p className='text-[12px] text-white'>{item.name}</p>
      
    </div>
  );
};

export default SkillBox;

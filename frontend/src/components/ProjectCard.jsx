import React, { useState } from 'react';

const ProjectCard = ({ items }) => {
  const [showOverlay , setShowOverlay] = useState(false)
  const { name, tech, link ,image} = items;
  const overlayStyle = {
    display: showOverlay ? 'block' : 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    height:'200px',
    width: '350px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust overlay background color and opacity
    color: '#fff',
    textAlign: 'center',
    borderRadius: '10px',
    fontSize:'20px'

  };
  return (
    <div className='pc'
    onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover'
      }}>
      <div style={overlayStyle}>
      <h1 style={{width:'100%'}}>{name}</h1>
      <button style={{
        height: '30px',
        width: '200px',
        marginBottom:'10px',
        background:'none',
        border: '2px solid violet',
        borderRadius: '10px',
        fontSize:'20px'
      }}><a href={link}>visit</a></button>
      </div>
      
    </div>
  );
};

export default ProjectCard;

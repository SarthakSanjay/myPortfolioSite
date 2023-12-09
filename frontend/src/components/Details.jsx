import React from 'react'
import Technologies from './Technologies'

const Details = () => {
  let detailsStyle ={
    padding: '20px'
  }
  return (
    <div className='details' style={detailsStyle}>
        <h1>SARTHAK SANJAY</h1>
        <h2>I am a fullstack developer</h2>
        <p> Hello! I'm Sarthak Sanjay, a passionate full-stack developer proficient in crafting robust backends, dynamic frontends, implementing Web APIs, harnessing the power of sockets for real-time communication, and more. I thrive on diving deep into complex projects, leveraging my expertise to contribute meaningfully. </p>
        <p>I take pride in being an active open-source contributor, having made significant contributions to both large-scale initiatives and intricate projects. My experience spans across startups and remote collaboration with ad hoc companies, allowing me to adapt and deliver excellence in diverse work environments.</p>
        <h2>Technologies</h2>
        <Technologies />
    </div>
  )
}

export default Details
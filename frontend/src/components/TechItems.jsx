import React from 'react'

const TechItems = ({image ,name}) => {
  return (
    <div style={{height:'100px', width: '100px',textAlign:"center"}}>
            <img src={image} style={{height:'80px',width:"100%"}} />
            <p style={{margin:'0px',textAlign:'center'}}>{name}</p>
        </div>
  )
}

export default TechItems
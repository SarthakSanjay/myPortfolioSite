import React from 'react'
import TechItems from './TechItems'

const Technologies = () => {
    const tech = [
        {
            name:"Nodejs",
            image:"../src/assets/tech/node.png"
        },
        {
            name:"Mongoose",
            image:"../src/assets/tech/mongoose.png"
        },
        {
            name:"React",
            image:"../src/assets/tech/react.svg"
        },
        {
            name:"Express",
            image:"../src/assets/tech/express.png"
        },
    ]
  return (
    <div style={{
        width:"100%",
        height:"500px",
        display:"flex",
        gap:'10px',
        flexWrap:"wrap"
    }}>
    
        {
            tech.map((item)=>{
                return <TechItems image={item.image} name= {item.name} />
            })
        }
       
    </div>
  )
}

export default Technologies
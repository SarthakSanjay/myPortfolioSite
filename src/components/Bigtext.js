import React from 'react'
import '../App.css'
const Bigtext = (props) => {
  return (
    <div className='letter-box'>
       <div className='first-name'>
        <span className='letter one' id='up'>S</span>
        <span className='letter two' id='down'>A</span>
        <span className='letter one' id='up'>R</span>
        <span className='letter two' id='down'>T</span>
        <span className='letter one' id='up'>H</span>
        <span className='letter two' id='down'>A</span>
        <span className='letter one' id='up'>K</span>
       </div>
        <br/>
        <div className='last-name'>
        <span className='letter two' id='down'>S</span>
        <span className='letter one' id='up'>A</span>
        <span className='letter two' id='down'>N</span>
        <span className='letter one' id='up'>J</span>
        <span className='letter two' id='down'>A</span>
        <span className='letter one' id='up'>Y</span>
        </div>
    </div>
  )
}

export default Bigtext
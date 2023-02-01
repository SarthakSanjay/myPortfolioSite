import React,{useState} from 'react'
import Bigtext from './Bigtext'
import '../App.css'
const Home = () => {
    const [dark ,setDark] = useState('')
    const handleClick = () => {
        setDark('dm')
    }
  return (
    <div className={`home ${dark}`} >
    
    <Bigtext  />
    <button onClick={handleClick} >LightMode</button>


    </div>
  )
}

export default Home
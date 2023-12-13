import React, { useState } from 'react'
import './App.css'
import ThemeMinimal from './themes/ThemeMinimal'
import ThemeNuts from './themes/ThemeNuts'
import { myContext } from './context/context'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contribution from './components/Contribution'
const App = () => {
  const [theme , setTheme] = useState(true)
  const [content , setContent] = useState('About')
   const [type ,setType] = useState(<About />)
   const [isActive , setIsActive] = useState(true)
   const [showModal , setShowModal] = useState(false)
   const updateIsActive = () =>{
    setIsActive(prev => ! prev)
   }
   const updateModal = () =>{
    setShowModal(prev => ! prev)
   }
  const updateContent = (newContent) =>{
    setContent(newContent)
  }
  const updateType = (content) =>{
      if(content === 'About Me'){
      setType(<About />)
    }
    if(content === 'Skills'){
      setType(<Skills />)
    }
    if(content === 'Projects'){
      setType(<Projects />)
    }
    if(content === 'Xtream'){
      setType(<Contribution />)
    }
  }
  const sharedData = {
    content,
    updateContent,
    updateType,
    type,
    isActive ,
    updateIsActive,
    showModal,
    updateModal
  }

  const handleClick = () =>{
    setTheme(prev => !prev)
  }
    return (
      <myContext.Provider value={sharedData}>

      <div className='h-[100%] lg:h-screen lg:w-screen   '  >
      <button className='h-10 w-[100px] hidden lg:hidden rounded-2xl m-2  border-[1px] text-white absolute right-0 hover:bg-white hover:text-black hover:border-black ' onClick={handleClick}>
      {theme?'Minimal':"Go Nuts"}
      </button>
        {
          theme ? 
      <ThemeMinimal /> : <ThemeNuts />
        }
      </div>
      </myContext.Provider>
    )

}

export default App
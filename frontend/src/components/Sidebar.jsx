import React, { useContext, useState } from 'react';
import { buttonArray } from '../utils/button';
import Button from './Button';
import Socials from './Socials';
import Modal from './Modal';
import { myContext } from '../context/context';
const Sidebar = () => {
  const [buttons, setButtons] = useState(buttonArray);

  const {showModal , updateModal} = useContext(myContext)
  const handleButtonClick = (clickedIndex) => {
    const updatedButtons = buttons.map((button, index) => ({
      ...button,
      isActive: index === clickedIndex
    }));
    setButtons(updatedButtons)
    updateModal()
  };

  return (
    <>
    <div className={`h-screen ${showModal ? 'blur-xl' : '' } lg:blur-none lg:w-1/6 sm:w-full p-[20px]`}>
    <div className='absolute h-40 w-40 text-center  top-[10%] left-[32%] \ lg:hidden'>
    <img
        className={`h-36 w-40 rounded-[20px]`}
        src="https://avatars.githubusercontent.com/u/107864062?s=400&u=318c6449cc868deebc86c80cd2d091e165408723&v=4"

      />
      <h1 className='text-white text-center'>SARTHAK SANJAY</h1>
    </div>
     <div className='h-full bg-purple-900 bg-opacity-20 flex flex-col  justify-center items-center rounded-lg'>
     
     {buttons.map((item, index) => (
        <Button
          type={item}
          key={index}
          isActive={item.isActive}
          handleClick={() => handleButtonClick(index)}
        />
      ))}
      <div className=' absolute  bottom-0'>
          <Socials />
      </div>
     </div>
    </div>
    {
      showModal ?  <div className={`absolute lg:hidden`}>
      <Modal />
    </div> : ''
    }
   
    </>
  );
};

export default Sidebar;

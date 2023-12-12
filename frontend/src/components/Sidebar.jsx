import React, { useState } from 'react';
import { buttonArray } from '../utils/button';
import Button from './Button';
import Socials from './Socials';
const Sidebar = () => {
  const [buttons, setButtons] = useState(buttonArray);

  const handleButtonClick = (clickedIndex) => {
    const updatedButtons = buttons.map((button, index) => ({
      ...button,
      isActive: index === clickedIndex
    }));
    setButtons(updatedButtons);
  };

  return (
    <div className=' h-screen w-1/6 p-[20px]'>
     <div className='h-full bg-purple-900 bg-opacity-20 flex flex-col justify-center items-center rounded-lg'>
     {buttons.map((item, index) => (
        <Button
          type={item}
          key={index}
          isActive={item.isActive}
          handleClick={() => handleButtonClick(index)}
        />
      ))}
      <div className='absolute bottom-0'>
          <Socials />
      </div>
     </div>
    </div>
  );
};

export default Sidebar;

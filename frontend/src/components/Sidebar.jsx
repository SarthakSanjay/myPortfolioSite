import React, { useState } from 'react';
import { buttonArray } from '../utils/button';
import Button from './Button';

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
    <div className='sidebar h-screen w-1/6 border-[1px] flex flex-col justify-center items-center p-[20px]'>
      {buttons.map((item, index) => (
        <Button
          type={item}
          key={index}
          isActive={item.isActive}
          handleClick={() => handleButtonClick(index)}
        />
      ))}
    </div>
  );
};

export default Sidebar;

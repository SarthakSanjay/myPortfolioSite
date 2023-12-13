import React, { useContext } from 'react';
import { myContext } from '../context/context';

const Button = ({ type,name, isActive, handleClick ,fromProjects }) => {
  const { updateContent, updateType } = useContext(myContext);
  
  const handleClickEvent = (e) => {
    updateType(e.target.name);
    updateContent(e.target.name);
    handleClick(); // This triggers the handleClick function from the Sidebar
  };
if(fromProjects){
  return  <button
  className={`h-10 w-[100px] rounded-2xl m-2  border-[1px] text-white  hover:bg-white hover:text-black hover:border-black
  }`}
  onClick={handleClickEvent}
  name={name}
>
  {name}
</button>
}
  return (
    <button
      className={`h-10 w-5/6 lg:w-[120px] rounded-2xl m-2  border-[1px] text-white  hover:bg-white hover:text-black hover:border-black ${
        isActive ? 'opacity-100 bg-gradient-to-t from-purple-800 via-violet-900 to-purple-800' : 'opacity-50'
      }`}
      onClick={handleClickEvent}
      name={type.name}
    >
      {type.name}
    </button>
  );
};

export default Button;

import React from 'react';

export const  InputTextComp = ({image, placeholder, label, extraStyle }) => {
  return ( 
    <div className={`flex border border-gray-300 px-3 py-3 ${extraStyle}}`}>
      <div className=' border-r-gray-300 border-r-[1px] pr-4 rounded-sm'>
        {image}
      </div>
        <input className='placeholder-gray-500 ml-3 outline-none border-none text-sm w-full'
         placeholder={placeholder}
        />
        <p className='flex text-sm text-gray-500'>{label}</p>
    </div>
  );
};  


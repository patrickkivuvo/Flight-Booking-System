import React from 'react'
import { ButtonYellowComp } from './ButtonYellowComp';
import {Link} from 'react-router-dom';

export const HeaderNavComp = () => {
  return <div className='grid grid-cols-4 gap-2'>
    <div className='flex justify-center col-span-1 p-5 items-center'>
     <div>
      <p className='text-3xl font-bold text-white'>FlyPoa</p>
      <p className='text-sm text-white text-center'>BUDGET</p>
     </div>
    </div>
    <div className='col-span-3 p-5 flex justfy-center items-center'>
      <a href='index.html'>
        <div className='hover:border-b-[2px] hover:border-b-yellow-400 pb-2'>
          <p className='text-white'>HOME</p>
        </div>
      </a>
      <a href='index.html' className='ml-5'>
        <div className='hover:border-b-[2px] hover:border-b-yellow-400 pb-2'>
          <p className='text-white'>ABOUT US</p>
        </div>
      </a>
      <a href='index.html' className='ml-5'>
        <div className='hover:border-b-[2px] hover:border-b-yellow-400 pb-2'>
          <p className='text-white'>BOOKING TERMS</p>
        </div>
      </a>
      <a href='index.html' className='ml-5'>
        <div className='hover:border-b-[2px] hover:border-b-yellow-400 pb-2'>
          <p className='text-white'>FLIGHT</p>
        </div>
      </a>
      <a href='index.html'className='ml-5'>
        <div className='hover:border-b-[2px] hover:border-b-yellow-400 pb-2'>
          <p className='text-white'>GET IN TOUCH</p>
        </div>
      </a>
      <a href='index.html'className='ml-5'>
        <div className='py-2 px-5 border-white border-[2px]'>
          <p className='text-white'>FIND FLIGHTS</p>
        </div>
      </a>
      <div className=' py-2 px-5 ml-5'>
      <Link to = '/userlogin' >
          <ButtonYellowComp label={'USER'} extraStyle={'flex '}/>
          </Link>
      </div>
      <div className=' py-2 px-5'>
      <Link to = '/login' >
          <ButtonYellowComp label={'ADMIN'} extraStyle={'flex '}/>
          </Link>
      </div>
     
    </div>
  </div>;
};



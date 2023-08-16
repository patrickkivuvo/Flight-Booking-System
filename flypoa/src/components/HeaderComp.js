import React from 'react'
import Image from '../assets/plane2.jpg'
import { HeaderNavComp } from './HeaderNavComp';
import {FlightBookingFormComp} from './FlightBookingFormComp';
import {Link} from 'react-router-dom';

<><Link to={"/add-flight"}> FIND FLIGHT </Link> </>

export const HeaderComp = () => {
  return <div className='w-[100%] h-[80%] bg-red-300 bg contain' 
  style={{ backgroundImage: `url(${Image})` }}
  >
    <HeaderNavComp />
    <div className='grid grid-cols-2 h-[90%]'>
      <div className='flex p-5 items-center'>
        <div>
          <p className='text-white text-xl'>FLYPOA BUDGET</p>
          <p className='text-white text-5xl'>We Are Very Reliable</p>
          <p className='text-yellow-400 text-5xl'>Professional, Experienced
          </p>
          <p className='text-white text-sm mt-3'>
            <span className='text-yellow-400'>FlyPoa budget</span> is the versatile website expowering you</p>
          <p className='text-white text-sm'>
            full services airline offering <span className='text-yellow-400'>reduced fairs.</span>
          </p>    
        </div>
      </div>
      <div className='flex'>
        <FlightBookingFormComp />
      </div>
    </div>
  </div>;
  
};



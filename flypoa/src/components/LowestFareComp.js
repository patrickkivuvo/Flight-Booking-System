import React from 'react'
import { LOWEST_FARE_LIST } from '../constants/AppConstants';
import { ButtonYellowComp } from './ButtonYellowComp';
import {Link} from 'react-router-dom';

export const LowestFareComp = () => {
  return ( 
    <div className='relative h-[80%] px-20 bg-[#1a63a8]'>
      <p className='text-sm text-center text-white'>CURRENT FARE</p>
      <p className='text-3xl mt-1 text-center text-white'>
        Today's Lowest Fare 
      </p>
      <div className='flex absolute bottom-[-100px] ml-[15%]'>
        {LOWEST_FARE_LIST.map((item) => {
                return(
                    <div 
                     key={`lowest-fare-${item.id}`} 
                     className='bg-white px-2 py-2 text-center mr-5  rounded-lg  shadow shadow-gray-400'
                    >
                        <img src={item.image} className='h-[150px] w-[150px]  rounded-lg'/>
                        <p className=' mt-2 font-semibold'>{item.heading}</p>
                        <p className=' text-sm'>
                         <span className=' text-gray-400'>Starting from</span> {''}
                         <spn className=' text-red-400 font-semibold'>{item.price}</spn>
                        </p>
                        <Link to = '/userlogin'>
                          <ButtonYellowComp label={'BOOK NOW'} extraStyle={'mt-5'}/>
                        </Link>
                    </div>
                )
            })
        }
      </div>
    </div>
    );
};



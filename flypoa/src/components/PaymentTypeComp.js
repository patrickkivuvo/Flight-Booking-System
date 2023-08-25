import React from 'react'
import { PAYMENT_FARE_LIST } from '../constants/PaymentConstants';
import { ButtonYellowComp } from './ButtonYellowComp';
import { Link } from 'react-router-dom';

export const PaymentType = () => {
  return ( 
    <div className='h-500 px-20 py-5 bg-slate-600 mt-10'>
      <p className='text-sm text-center text-white'>MAKE YOUR PAYMENTS</p>
      <p className='text-3xl mt-1 text-center text-white'>
        CHOOSE PAYMENT METHOD 
      </p>
      <div className='flex absolute mt-3 ml-[15%]'>
        {PAYMENT_FARE_LIST.map((item) => {
                return(
                    <div 
                     key={`lowest-fare-${item.id}`} 
                     className='bg-white px-2 py-2 text-center mr-5  rounded-lg  shadow shadow-gray-400'
                    >
                        <img src={item.image} className='h-[150px] w-[150px]  rounded-lg'/>
                        <p className=' mt-2 font-semibold'>{item.heading}</p>
                        <p className=' text-sm'>
                         <span className=' text-yellow-700'>Fly</span> 
                         <spn className=' text-green-400 font-semibold'>{item.price}</spn>
                        </p>
                        <Link to = '/showcart'>
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



import React from 'react'
import { ButtonYellowComp } from './ButtonYellowComp';
import FlyImage from '../assets/flights.jpg';

export const ProfessionalExpoComp =()  =>{
  return (
    <div className='h-[80%] px-20 py-[140px]'>
        <div className=' grid grid-cols-2 gap-5 p-5 h-[90%]'>
            <div className=' bg-contain' style={{
                 backgroundImage: `url(${FlyImage})`,
                  }}></div>
            <div>
                <div>
                    <div>
                        <p className='text-sm'>BEST CHOICE</p>
                        <p className='text-3xl mt-1'>
                            We Are Very Reliable <br></br> 
                            <span className='text-[#3781c5]'>
                                {''}
                                Professional, Experienced
                            </span> 
                        </p>
                    </div>  
                </div>
                <p className=' mt-3'>
                    Boasting an outdoor swimming pool, a garden, 
                    a shared lounge and a restaurant, Lisa's Paradise
                </p> 
                <p className=' mt-5'>
                    Boasting an outdoor swimming pool, a garden, 
                    a shared lounge and a restaurant, Lisa's Paradise 
                    (A) in Skynest Residences is situated in the Westlands district of Nairobi, 
                    only 2.2 km from Nairobi National Museum. 
                    This property offers access to a balcony
                </p> 
                <div className='flex'>
                    <ButtonYellowComp label={'Read More'} extraStyle={'mt-10'}/>
                </div>
            </div>
        </div>
    </div>  
  );
};

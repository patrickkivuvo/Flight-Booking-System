import React from 'react'
import { InputTextComp } from './InputTextComp';
import { ButtonYellowComp } from './ButtonYellowComp';
import { IoIosAirplane } from 'react-icons/io';
import { SiPhotocrowd } from 'react-icons/si';
import {MdLocationPin, MdEmail} from 'react-icons/md';
import {BiCalendar, BiPhoneCall} from 'react-icons/bi';


export const FlightBookingFormComp = () => {
  return <div className='bg-white w-[23%] rounded-3xl absolute bottom-1 shadow shadow-gray-400'>
     <div className=' p-3'>
        <p className=' font-semibold text-center'>
          Book Cheap <span className='text-yellow-400'>Flights</span>
        </p>
     </div>
      <div className=' flex bg-black text-white justify-center py-3 '>
        <div className='flex'>  
            <input 
              className=' text-white'
              type="radio" 
              id="age1" 
              name="age" 
              value="30" 
            />  
            <p className=' text-sm ml-3'>One Way</p>
        </div>
        <div className='flex ml-3'>
            <input 
              className=' text-white'
              type="radio" 
              id="age1" 
              name="age" 
              value="30" 
            />  
            <p className=' text-sm ml-3 text-yellow-400'>Round Trip</p>
        </div>
      </div>
      <div className=' p-5'>
        <InputTextComp 
          image={<IoIosAirplane />} 
          placeholder={'Enter City'} 
          label='Departure' 
        />
        <InputTextComp 
          image={<MdLocationPin />} 
          placeholder={'Enter City'} 
          label='Arrivals' 
          extraStyle={'mt-1'}
        />
        <InputTextComp 
          image={<BiCalendar />} 
          placeholder={'11 Feb 2023'} 
          label='Date' 
          extraStyle={'mt-1'}
        />
        <InputTextComp 
          image={<SiPhotocrowd />} 
          placeholder={'02 Adt 04 Kids'} 
          label='Travellers' 
          extraStyle={'mt-1'}
        />
        <InputTextComp 
          image={<BiPhoneCall />} 
          placeholder={'+254 xxx xxxxxx'} 
          label='Phone' 
          extraStyle={'mt-1'}
        />
        <InputTextComp 
          image={<MdEmail />} 
          placeholder={'pato@gmail.com'} 
          label='Email' 
          extraStyle={' mt-1'}
        />
      </div>
      <div className='px-5'>
        <ButtonYellowComp label={'BOOK NOW'} extraStyle={' mt-1'}/>
      </div>
  </div>;
  
};


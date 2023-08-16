import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import {
   AiFillTwitterCircle,
   AiFillInstagram, 
   AiFillLinkedin
   } from 'react-icons/ai';

export const FooterComp = () => {
  return (
    <div className='h-[50%] px-20 py-5 bg-slate-600 mt-10'>
         <div className=' grid grid-cols-4 gap-10 text-white h-[80%]'>
              <div>
                  <p className='text-2xl font-bold'>
                  <span className='text-yellow-400'>F</span>lyPoa</p>
                  <p className='text-sm'>BUDGET</p>
                  <p className=' mt-5 text-sm'>
                    FlyPoa Budget is the versatile website expowering you full-service 
                    airline offering reduced fares{''}
                  </p>
                  <div className='flex h-14 items-center'>
                    <a href='#'>
                      <BsFacebook size={20}/>
                    </a>
                    <a href='#'>
                      {""}
                      <AiFillTwitterCircle  size={20} className='ml-2'/>
                    </a>
                    <a href='#'>
                      {""}
                      <AiFillInstagram  size={20} className='ml-2' />
                    </a>
                    <a href='#'>
                      {""}
                      <AiFillLinkedin  size={20} className='ml-2' />
                    </a> 
                  </div>
            </div>
            <div>
              <p className='text-2xl font-bold'> 
              <span className='text-yellow-400'>G</span>et in Touch</p>
              <p className='text-sm'>BUDGET</p>
              <div className='items-center mt-10'>
                <p className='text-sm ml-2'>Phone: +254 748 481418</p>
                <p className='text-sm ml-2'>Email: info@flypoa.co.ke</p>
              </div>
            </div>
            <div>
            <p className='text-2xl font-bold'>
            <span className='text-yellow-400'>F</span>lights</p>
              <div className='items-center mt-10'>
                <p className='text-sm ml-2'>Asia</p>
                <p className='text-sm ml-2'>Africa</p>
                <p className='text-sm ml-2'>South America</p>
                <p className='text-sm ml-2'>Europe</p>
                <p className='text-sm ml-2'>Middle East</p>
                <p className='text-sm ml-2'>North America</p>
              </div>
            </div>
            <div>
            <p className='text-2xl font-bold'>
            <span className='text-yellow-400'>U</span>seful Links</p>
              <div className='items-center mt-10'>
                <p className='text-sm ml-2'>Contact Us</p>
                <p className='text-sm ml-2'>About Us</p>
                <p className='text-sm ml-2'>Booking Terms</p>
              </div>
            </div>
         </div>
         <div className='flex justify-between w-full text-white mt-10 text-sm h-[20%]'>
          <p>All Rights Reserved By <span className='text-yellow-400'>FlyPoa Budget</span></p>
          <p>Terms and Conditions - Privacy policy</p>
         </div>
    </div>
  );
};




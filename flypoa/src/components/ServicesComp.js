import React from 'react'
import TickImage from '../assets/tick.jpg'
import OkayImage from '../assets/ok.jpg'
import LowImage from '../assets/low.jpeg'
import MicImage from '../assets/mic.jpg'
import CoinImage from '../assets/coin1.png'

export const ServicesComp = () => {
  
  return (
    <div className='h-[70%] px-20 py-20'>
        <div className=' grid grid-cols-2 gap-2 h-[90%]'>
            <div>
                <p className='text-sm'>BEST CHOICE</p>
                <p className='text-3xl mt-1'>
                    Why Should <br></br> You Use
                    <span className='text-[#3781c5]'>
                        {''}
                        Our <br></br>Services
                    </span> 
                </p>
                <div className='mt-1'>            
                  <div className='flex w-[50px] h-[50px] rounded-full bg-[#dce8f6] justify-center items-center'>
                        <img src={CoinImage} className='w-[20px] h-[20px]' /> 
                  </div>
                  <p className=' text-black text-lg mt-5'>Price Beating Guarantee</p>
                  <div className='w-[200px] mt-1'> 
                    <p className='text-sm text-gray-500'>
                        Our goal is to provide you with the best travel experience possible from start to finish
                    </p>
                  </div>
                </div>
            </div>
            <div>
              <div className='flex justify-between'>
                <div className='mt-1'>            
                  <div className='flex w-[50px] h-[50px] rounded-full bg-[#dce8f6] justify-center items-center'>
                        <img src={TickImage} className='w-[20px] h-[20px]' /> 
                  </div>
                  <p className=' text-black text-lg mt-5'>Special Offers</p>
                  <div className='w-[200px] mt-1'> 
                    <p className='text-sm text-gray-500'>
                        We do offer promotional deals. Simple contact us and get the advantage.
                    </p>
                  </div>
                </div>
                <div className=' mt-1'>
                  <div className='flex w-[50px] h-[50px] rounded-full bg-[#dce8f6] justify-center items-center'>
                        <img src={MicImage} className='w-[20px] h-[20px]' /> 
                  </div>
                  <p className=' text-black text-lg mt-5'>Customer services 24/7</p>
                  <div className='w-[200px] mt-1'> 
                    <p className='text-sm text-gray-500'>
                        We do offer promotional deals. Simple contact us and get the advantage.
                    </p>
                  </div>
                </div>
              </div>
             <div className=' flex justify-between'>
                <div className=' mt-1'>
                  <div className='flex w-[50px] h-[50px] rounded-full bg-[#dce8f6] justify-center items-center'>
                        <img src={OkayImage} className='w-[20px] h-[20px]' /> 
                  </div>
                  <p className=' text-black text-lg mt-5'>99% Satisfaction</p>
                  <div className='w-[200px] mt-1'> 
                    <p className='text-sm text-gray-500'>
                        We do offer promotional deals. Simple contact us and get the advantage.
                    </p>
                  </div>
                </div>
                <div className=' mt-1'>
                  <div className='flex w-[50px] h-[50px] rounded-full bg-[#dce8f6] justify-center items-center'>
                        <img src={LowImage} className='w-[20px] h-[20px]' /> 
                  </div>
                  <p className=' text-black text-lg mt-5'>Low Deposit</p>
                  <div className='w-[200px] mt-1'> 
                    <p className='text-sm text-gray-500'>
                        We do offer promotional deals. Simple contact us and get the advantage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};






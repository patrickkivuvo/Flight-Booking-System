import axios from 'axios';
import React, {  useState} from 'react'
import {toast} from 'react-toastify'
import { Link} from 'react-router-dom';


const CardDetailsComp = () =>{
  const [data, setData] = useState({})
   
   
   const handleForm = (param) =>{
      postData(data)
      param.preventDefault()
   }

   

    const postData = async (data) =>{
      try {
         const response = await axios.post('http://localhost:8080/cards/data' ,data)
         toast.info("Flight Added")
         console.log(response)
         window.location.reload(true)
      } catch (error) {
         toast.info('Failed');
         console.log(error)
      }
      
   }
   

   


   return(
      <div className='flex justify-center mt-8 mb-5'>
         <br /> <br />
         <div className= "card shadow shadow-gray-400">
            <div className= "row">
                <div className= "card col-md-6 offset-md-3 offset-md-3 p-5">              
                    <div className= " ">
                        <form onSubmit={handleForm}>
                        <h2 className="text-center text-yellow-700">CARD PAYMENT</h2>
                            <div className= " flex border border-gray-300 px-3 py-3 mt-1 mb-1">                        
                                <input 
                                type= "text"
                                placeholder = "Enter Debit Card"
                                className=' placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                    setData({...data,debitCard:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input 
                                type= "text"
                                placeholder= "Enter Expir Date"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,expiryDate:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= " flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input 
                                type= "text"
                                placeholder='Enter Card Holder Name'
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,cardHolderName:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input
                                type= "number" 
                                placeholder= "Enter Amount"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,amount:e.target.value})
                                }}
                                >
                                </input>
                            </div>                    
                            <div className='flex justify-center items-center mt-2'>
                                <div className=' py-2 px-5 text-sm bg-green-500 rounded-lg'>
                                <button type="submit" className= " text-white" >Ok</button>
                                </div>
                                <div className='py-2 px-5 text-sm bg-yellow-300 rounded-lg ml-5'>
                                <button type="reset" className=" text-white" > Clear</button>
                                </div>
                                <div className='py-2 px-5 text-sm bg-blue-500 rounded-lg ml-5'>
                                <Link to ="/" className= " text-white" >Finish</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
      </div>
   )

}

export default CardDetailsComp;
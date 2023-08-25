import axios from 'axios';
import React, {  useState} from 'react'
import {toast} from 'react-toastify'
import { Link} from 'react-router-dom';


const PassengerDetailsComp = () =>{
  const [data, setData] = useState({})
   
   
   const handleForm = (param) =>{
      postData(data)
      param.preventDefault()
   }

   

    const postData = async (data) =>{
      try {
         const response = await axios.post('http://localhost:8080/passengers/data' ,data)
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
         <div className= "bg-white w-[35%] rounded-3xl  shadow shadow-gray-600">
            <div className= "row">
                <div className= " col-md-6 offset-md-3 offset-md-3 p-5">              
                    <div className= " ">
                        <form onSubmit={handleForm}>
                        <h2 className="text-center text-yellow-400">PASSENGER DETAILS</h2>
                            <div className= " flex border border-gray-300 px-3 py-3 mt-1 mb-1">                        
                                <input 
                                type= "text"
                                placeholder = "Enter First Name"
                                className=' placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                    setData({...data,firstname:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input 
                                type= "text"
                                placeholder= "Enter Middle Name"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,middlename:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= " flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input 
                                type= "text"
                                placeholder='Enter Last Name'
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,lastname:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input
                                type= "text" 
                                placeholder= "Enter Date Of Birth"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,dateofbirth:e.target.value})
                                }}
                                >
                                </input>
                            </div>                    
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input
                                type= "text" 
                                placeholder= "Enter Document Type"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,documentType:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input
                                type= "text"
                                placeholder= "Enter Document Number"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,documentNumber:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input
                                type= "text"
                                placeholder= "Enter Frequent Flyer Number"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,frequentFlyerNumber:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className=' py-2 px-5 text-sm bg-green-500 rounded-lg'>
                                <button type="submit" className= " text-white" >Save</button>
                                </div>
                                <div className='py-2 px-5 text-sm bg-yellow-300 rounded-lg ml-5'>
                                <button type="reset" className=" text-white" > Clear</button>
                                </div>
                                <div className='py-2 px-5 text-sm bg-blue-500 rounded-lg ml-5'>
                                <Link to ="/payment" className= " text-white" > Next</Link>
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

export default PassengerDetailsComp;
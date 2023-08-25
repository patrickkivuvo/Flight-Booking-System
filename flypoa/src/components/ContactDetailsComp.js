import axios from 'axios';
import React, {  useState} from 'react'
import {toast} from 'react-toastify'
import { Link} from 'react-router-dom';


const ContactDetailsComp = () =>{
  const [data, setData] = useState({})
   
   
   const handleForm = (param) =>{
      postData(data)
      param.preventDefault()
   }

   

    const postData = async (data) =>{
      try {
         const response = await axios.post('http://localhost:8080/contacts/data' ,data)
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
                        <h2 className="text-center text-yellow-400"> CONTACT DETAILS</h2>
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
                                type= "number"
                                placeholder= "Enter Phone Number"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data, phone:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input
                                type= "text" 
                                placeholder= "Enter Email"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,email:e.target.value})
                                }}
                                >
                                </input>
                            </div>                    
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input
                                type= "number" 
                                placeholder= "Enter Address"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,address:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input
                                type= "text"
                                placeholder= "Enter Country"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,country:e.target.value})
                                }}
                                >
                                </input>
                            </div>
                            <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                                <input
                                type= "text"
                                placeholder= "Enter City"
                                className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                                onChange = {(e) =>{
                                setData({...data,city:e.target.value})
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
                                <Link to ="/passenger" className= " text-white" > Next</Link>
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

export default ContactDetailsComp;
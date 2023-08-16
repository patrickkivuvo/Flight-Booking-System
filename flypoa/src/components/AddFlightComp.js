import axios from 'axios';
import React, {  useState} from 'react'
import {toast} from 'react-toastify'
import { Link} from 'react-router-dom';


const AddFlightComp = () =>{
  const [data, setData] = useState({})
   
   
   const handleForm = (param) =>{
      postData(data)
      param.preventDefault()
   }

   

    const postData = async (data) =>{
      try {
         const response = await axios.post('http://localhost:8080/flights/data' ,data)
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
            <div className= "card col-md-6 offset-md-3 offset-md-3 p-5">
               
               <div className= " ">
                  <form onSubmit={handleForm}>
                  <h2 className="text-center text-yellow-400"> ADD FLIGHT</h2>
                     <div className= " flex border border-gray-300 px-3 py-3 mt-1 mb-1">                        
                        <input 
                           type= "text"
                           placeholder = "Enter Flight Model"
                           className=' placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                           onChange = {(e) =>{
                              setData({...data,model:e.target.value})
                           }}
                           >
                        </input>
                     </div>

                     <div className= " flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                        <input 
                        type= "text"
                        placeholder='Enter Flight Name'
                        className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                        onChange = {(e) =>{
                           setData({...data,name:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                        <input 
                        type= "text"
                        placeholder= "Enter Source"
                        className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                        onChange = {(e) =>{
                           setData({...data,source:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                        <input
                        type= "text" 
                        placeholder= "Enter Destination"
                        className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                        onChange = {(e) =>{
                           setData({...data,destination:e.target.value})
                        }}

                        >
                        </input>

                     </div>
                     
                     <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                        <input
                        type= "number" 
                        placeholder= "Enter Distance"
                        className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                        onChange = {(e) =>{
                           setData({...data,distance:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                        <input
                        type= "text"
                        placeholder= "Enter Days"
                        className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                        onChange = {(e) =>{
                           setData({...data,days:e.target.value})
                        }}
                        >
                        </input>

                     </div>

                     <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                        <input
                        type= "text"
                        placeholder= "Enter Luggage"
                        className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                        onChange = {(e) =>{
                           setData({...data,luggage:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                        <input 
                        type= "text" 
                        placeholder= "Enter Departure"
                        className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                        onChange = {(e) =>{
                           setData({...data,departure:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                        <input
                        type= "text"
                        placeholder= "Enter Arrival"
                        className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                        onChange = {(e) =>{
                           setData({...data,arrival:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                        <input
                        type= "text"
                        placeholder= "Enter Duration"
                        className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                        onChange = {(e) =>{
                           setData({...data,duration:e.target.value})
                        }}

                        >
                        </input>

                     </div>

                     <div className= "flex border border-gray-300 px-3 py-3 mt-1 mb-1">
                        <input
                        type= "number"
                        placeholder= "Enter Seats"
                        className='placeholder-gray-700 ml-2 outline-none border-none text-sm w-full'
                        onChange = {(e) =>{
                           setData({...data,seats:e.target.value})
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
                        <div className='py-2 px-5 text-sm bg-red-500 rounded-lg ml-5'>
                           <Link to ="/flights" className= " text-white" > Exit</Link>
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

export default AddFlightComp;
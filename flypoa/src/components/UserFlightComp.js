import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom';
import { ButtonYellowComp } from './ButtonYellowComp';
import { ButtonExitComp } from './ButtonExitComp';


<><Link to={"/add-flight"}> BOOK NOW </Link><Link to={"/"}> EXIT </Link></>

const   ListFlightComp = () => {
  const [flights, setFlights] = useState([])

  const navigate = useNavigate()

   useEffect(()=> {
    getAllFlightsFromServer();
   }, [])
    const getAllFlightsFromServer = ()=>{
      axios.get('http://localhost:8080/flights').then((response)=>{
        console.log(response)
        setFlights(response.data)
        toast.success("All Flights loaded from Server !!")
      },
      (error)=>{
        toast.error("All Flights loaded from Server !!")
      }

      )
    }
    const deleteFlight = (flightId) =>{
      axios.delete(`http://localhost:8080/flights/${flightId}`).then((response)=>{
        console.info("!! Flight deleted successfuly !!")
        window.location.reload(true)
      },
      (error)=>{
        toast.error("!! Something went wrong on Server!!")
      })
    }
    
   

          
  return (
    <div>
      <h2 className= "text-center text-blue-700"> Available Flights</h2>
      <div className='flex '>
      <div className=' py-2 px-5'>
      <Link to = '/contact' >
          <ButtonYellowComp  label={'BOOK NOW'} extraStyle={'flex '}/>
          </Link>
      </div>
      <div className=' py-2 px-5'>
      <Link to = '/' >
          <ButtonExitComp  label={'EXIT'} extraStyle={'flex '}/>
          </Link>
      </div>
      </div>
  
      
      <table className= "w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <th  scope="col" class="px-2 py-2"> Flight Id</th>
          <th  scope="col" class="px-2 py-2"> Model</th>
          <th  scope="col" class="px-2 py-2"> Name</th>
          <th  scope="col" class="px-2 py-2"> Source</th>
          <th  scope="col" class="px-2 py-2"> Destination</th>
          <th  scope="col" class="px-2 py-2"> Distance</th>
          <th  scope="col" class="px-2 py-2"> Days</th>
          <th  scope="col" class="px-2 py-2"> Price</th>
          <th  scope="col" class="px-2 py-2"> Departure</th>
          <th  scope="col" class="px-2 py-2"> Arrival</th>
          <th  scope="col" class="px-2 py-2"> Duration</th>
          <th  scope="col" class="px-2 py-2"> Seats</th>
        </thead>
        <tbody>
          {
            flights.map(
              flight =>
                 <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key= {flight.flightId}>
                    <td class="px-2 py-2 text-gray-900"> {flight.flightId}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.model}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.name}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.source}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.destination}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.distance}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.days}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.price}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.departure}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.arrival}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.duration}</td>
                    <td class="px-2 py-2 text-gray-900"> {flight.seats}</td>                 
                 </tr>
            )
          }
        </tbody>

      </table>
     
    </div>
  )
}

export default ListFlightComp;
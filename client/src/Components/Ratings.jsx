import React from 'react'
import { FaStar } from "react-icons/fa";
const Ratings = ({rate}) => {
  return (
    <div className='flex items-center gap-1' >
      {[...Array(rate)].map(()=>(
        <p  className='text-amber-500' ><FaStar/></p>
      ))}

{[...Array(5-rate)].map(()=>(
        <p  className='text-gray-500' ><FaStar/></p>
      ))}
    </div>
  )
}

export default Ratings

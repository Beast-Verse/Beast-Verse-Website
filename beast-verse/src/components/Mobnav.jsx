import React from 'react'
import logo from '../assets/logo.png'
import ham from '../assets/hamburger.png'
import { HashLink as Link} from "react-router-hash-link"

function Mobnav() {
  return (
    <div>
      <div className=' '>
      <div><img src={logo} alt="bv_logo" className='w-24' /></div>
      
         <ul>
         <li className='text-blue-300 '>Home</li>
                <li className='text-gray-400 '>MarketPlace</li>
                <li className='text-gray-400 '>Buy Eggs</li>
                <li className='text-blue-300 '>About Us</li>
           </ul>
      
      </div>
    </div>
  )
}

export default Mobnav

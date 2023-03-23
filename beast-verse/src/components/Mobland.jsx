import React from 'react'
import logo from '../assets/logo.png'
function Mobland() {
  return (
    <div>
    <div className='container mx-auto text-center text-white font-semibold font-Monstserrat h-[80vh] flex flex-col items-center justify-center'>
    <img src={logo} alt="bv_logo" className='w-80' />
    <h2 className='mx-9'>Open in Desktop/Laptop to get an Immersive Experience!</h2>
    <button className='border-white mt-10 hover:border-green-900 border-2 shadow-xl hover:shadow-sm font-bold text-xl bg-gradient-to-br from-green-600 to-lime-400 hover:to-green-600 hover:from-lime-500 text-white py-2 px-12 rounded-lg cursor-pointer'>Join Waitlist</button>
    </div></div>
  )
}

export default Mobland

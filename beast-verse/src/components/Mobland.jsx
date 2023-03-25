import React from 'react'
import logo from '../assets/logo.png'
import island from '../assets/island.jpg'
function Mobland() {
  return (
    <div id="Mobland" className='' >
    <img className="brightness-75 w-[600px] -z-10" alt="" src={island}></img>
    <div className='container absolute bottom-[55vw] left-0 mx-auto text-center text-white font-semibold font-Monstserrat h-[80vh] flex flex-col items-center justify-center'>
    <img src={logo} alt="bv_logo" className='w-[50%] mx-auto'/>
    <button className='border-white mt-10 hover:border-green-900 border-2 shadow-xl hover:shadow-sm font-bold text-xl bg-gradient-to-br from-green-600 to-lime-400 hover:to-green-600 hover:from-lime-500 text-white py-2 px-6 rounded-lg cursor-pointer'><a href="https://forms.gle/cu4EdYt3rEReyojx6">Join Waitlist</a></button>
    </div>
    </div>
  )
}

export default Mobland

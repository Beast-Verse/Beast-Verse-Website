import React from 'react'
import {motion} from 'framer-motion'

export default function Navbar() {
  return (
    <motion.div
    
    initial={{y: -100}}
    animate={{y: 0}}

    className='bg-white w-[70%] container mx-auto rounded-xl drop-shadow-xl'>
        <div className='p-4 px-5 flex flex-row justify-between items-center'>
            <div className='font-black font-Montserrat text-xl text-blue-900 leading-none cursor-pointer'>
                Logo Here
            </div>
            <ul className='flex flex-row gap-5 font-Monstserrat font-bold text-blue-400 items-center'>
                <li className='hover:text-blue-700 cursor-pointer'>Home</li>
                <li className='hover:text-blue-700 cursor-pointer'>Marketplace</li>
                <li className='hover:text-blue-700 cursor-pointer'>Buy Eggs</li>
                <li className='hover:text-blue-700 cursor-pointer'>About Us</li>
                <li className='bg-gradient-to-br from-blue-600 to-blue-400 hover:to-blue-600 hover:from-blue-500 text-white p-2 rounded-lg cursor-pointer'>Pre-Register</li>
            </ul>
        </div>
    </motion.div>
  )
}

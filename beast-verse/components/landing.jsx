import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

import logo from '../assets/logo.png'
import Desert from '../assets/Desert.png'
import Forest from '../assets/Forest.png'
import Ice from '../assets/Ice.png'
import Swamp from '../assets/Swamp.png'
import Volcano from '../assets/Volcano.png'
import Clouds from '../assets/clouds.png'


export default function Landing() {
  return (
    <>
        {/* background */}
        <motion.div
            initial={{filter: 'blur(0px)'}}
            animate={{filter: 'blur(5px)'}}
            transition={{
                duration: 2,
                ease: 'easeInOut'
            }}
        className='grid grid-flow-col grid-rows-4 justify-center items-center absolute w-full z-10'>
            <motion.div
            animate={{
                y: [0, 10, -5, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                // times: [0, 0.2, 0.5, 1],
                repeat: Infinity
              }}
            
              className='w-[13%] absolute top-80 left-0'>
                <Image src={Forest} alt=""/>
            </motion.div>
            <motion.div
            animate={{
                y: [0, 5, -10, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                // times: [0, 0.2, 0.5, 1],
                repeat: Infinity
              }}
            
            className='w-[15%] absolute top-10 right-40'>
                <Image src={Desert} alt=""/>
            </motion.div>
            <motion.div
            animate={{
                y: [0, 15, -10, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                // times: [0, 0.2, 0.5, 1],
                repeat: Infinity
              }}
            
              className='w-[15%] top-0 left-0 absolute'>
                <Image src={Ice} alt=""/>
            </motion.div>

            <motion.div
            animate={{
                y: [0, 5, -15, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                // times: [0, 0.2, 0.5, 1],
                repeat: Infinity
              }}
            
              className='w-[40%] absolute top-10 left-40'>
                <Image src={Swamp} alt=""/>
            </motion.div>

            <motion.div
            animate={{
                y: [0, 25, -10, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                // times: [0, 0.2, 0.5, 1],
                repeat: Infinity
              }}
            
              className='w-[25%] absolute top-56 right-32'>
                <Image src={Volcano} alt=""/>
            </motion.div>
        </motion.div>

        {/* foregroud */}
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 2,
                delay: 2,
                ease: 'easeInOut'
            }}

        className='container mx-auto flex flex-col justify-center items-center mt-28 z-20 relative'>
            <Image src={logo} alt="bv_logo" className='w-[40%]' />
            <div className='flex flex-row gap-4'>
                <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}

                className='border-white hover:border-green-900 border-2 shadow-xl hover:shadow-sm font-bold text-2xl bg-gradient-to-br from-green-600 to-lime-400 hover:to-green-600 hover:from-lime-500 text-white py-4 px-16 rounded-lg cursor-pointer'>Pre-Register</motion.button>
                {/* <button className='border-white hover:border-purple-900 border-2 shadow-xl hover:shadow-sm font-bold text-lg bg-gradient-to-br from-purple-800 to-purple-500 hover:to-purple-600 hover:from-purple-500 text-white py-4 px-7 rounded-lg cursor-pointer'>Join Discord</button> */}
            </div>
        </motion.div>

        {/* clouds */}
        
        <motion.div
        >
            <Image src={Clouds} alt="bv_logo" className='absolute left-[-60%] top-[-5%] z-30' />
        </motion.div>
        
        <motion.div
        >
            <Image src={Clouds} alt="bv_logo" className='absolute right-[-60%] top-[-5%] z-30 -scale-x-100' />
        </motion.div>
        
    </>
    
  )
}
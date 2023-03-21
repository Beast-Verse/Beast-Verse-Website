import React from 'react'
import {motion} from 'framer-motion'
import logo from '../assets/logo.png'
import land from '../assets/land.png'

// import logo from '../assets/logo.png'
// import Desert from '../assets/landing/Desert.png'
// import Forest from '../assets/landing/Forest.png'
// import Ice from '../assets/landing/Ice.png'
// import Swamp from '../assets/landing/Swamp.png'
// import Volcano from '../assets/landing/Volcano.png'
// import Base from "../assets/landing/Base3.png"
// import LBBack from "../assets/landing/LBBack.png"
// import LBFront from "../assets/landing/LBFront.png"
// import LUBack from "../assets/landing/LUBack.png"
// import LUFront from "../assets/landing/LUFront.png"
// import RBBack from "../assets/landing/RBBack.png"
// import RBFront from "../assets/landing/RBFront.png"
// import RUFront from "../assets/landing/RUFront.png"
// import RUBack from "../assets/landing/RUFBack.png"
// import Sky from "../assets/landing/Sky.png"
// import Main from "../assets/landing/Main Cloud.png"

import videoSource from '../assets/No Flicker.mp4';



export default function Landing() {
  return (
    <div className=' overflow-x-hidden w-[100vw] flex' id="Landing">
        {/* background */}
        {/* <img src={Sky} alt="bv_island" className='relative top-0 left-0'></img>
        <img src={LUBack} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>
        <img src={Desert} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>
        <img src={LUFront} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>

        <img src={Volcano} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>
        <img src={Main} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>

        
        <img src={Base} alt="bv_island" className='absolute top-[5.75rem] left-0'></img>

        <img src={LBBack} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>
        <img src={Forest} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>
        <img src={LBFront} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>

        <img src={RBBack} alt="bv_island" className='absolute top-[2rem] left-0'></img>
        <img src={Swamp} alt="bv_island" className='absolute top-0 left-0'></img>
        <img src={RBFront} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>
        <img src={RUBack} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>
        <img src={Ice} alt="bv_island" className='absolute top-[5.56rem] left-0'></img>
        <img src={RUFront} alt="bv_island" className='absolute top-[5.56rem] left-0'></img> */}

        <motion.div
        //blur animation
        initial={{filter: 'blur(0px)'}}
        animate={{filter: 'blur(4px)'}}
        transition={{
            duration: 2,
            delay: 5,
            ease: 'easeInOut'
        }}
        className='h-[100vh] overflow-clip hidescrollbar'>
            <video autoPlay muted loop className="top-0 left-0 w-[100vw] bg-cover overflow-x-hidden">
                <source src={videoSource} type="video/mp4" className=''/>
            </video>
        </motion.div>

        <motion.div initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 2,
                delay: 7,
                ease: 'easeInOut'
            }}>
        <img src={land} alt="land sillouhette" className='absolute w-[100vw] -bottom-[40px] left-0'/>
        </motion.div>

        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 2,
                delay: 5,
                ease: 'easeInOut'
            }}

        className='absolute flex flex-col justify-center items-center z-0 w-[100vw] h-[100vh]'>
            <img src={logo} alt="bv_logo" className='w-[30%]' />
            <div className='flex flex-row gap-4'>
                <motion.a
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href='https://forms.gle/kNn1TArMvbYRc3vj8'
                className='border-white hover:border-green-900 border-2 shadow-xl hover:shadow-sm font-bold text-2xl bg-gradient-to-br from-green-600 to-lime-400 hover:to-green-600 hover:from-lime-500 text-white py-4 px-16 rounded-lg cursor-pointer'>Pre-Register</motion.a>
                {/* <button className='border-white hover:border-purple-900 border-2 shadow-xl hover:shadow-sm font-bold text-lg bg-gradient-to-br from-purple-800 to-purple-500 hover:to-purple-600 hover:from-purple-500 text-white py-4 px-7 rounded-lg cursor-pointer'>Join Discord</button> */}
            </div>
        </motion.div>


    </div>
    
  )
}
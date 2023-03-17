import React from 'react'
// import {motion} from 'framer-motion'

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

import videoSource from '../assets/video.mp4';



export default function Landing() {
  return (
    <div className=' overflow-x-hidden w-[100vw] flex'>
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

        <video autoPlay muted loop className="top-0 left-0 w-[100vw] bg-cover overflow-x-hidden">
          <source src={videoSource} type="video/mp4" className=''/>
        </video>


    </div>
    
  )
}
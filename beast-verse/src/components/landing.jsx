import React from 'react'
import {motion} from 'framer-motion'

import logo from '../assets/logo.png'
import Desert from '../assets/landing/Desert.png'
import Forest from '../assets/landing/Forest.png'
import Ice from '../assets/landing/Ice.png'
import Swamp from '../assets/landing/Swamp.png'
import Volcano from '../assets/landing/Volcano.png'
import Base from "../assets/landing/Base clouds.png"
import LBBack from "../assets/landing/LBBack.png"
import LBFront from "../assets/landing/LBFront.png"
import LUBack from "../assets/landing/LUBack.png"
import LUFront from "../assets/landing/LUFront.png"
import RBBack from "../assets/landing/RBBack.png"
import RBFront from "../assets/landing/RBFront.png"
import RUFront from "../assets/landing/RUFront.png"
import RUBack from "../assets/landing/RUFBack.png"
import Sky from "../assets/landing/Sky.png"
import Main from "../assets/landing/Main Cloud.png"


export default function Landing() {
  return (
    <div className=' overflow-x-hidden w-[100vw] flex'>
        {/* background */}
        <img src={Sky} className='relative top-0 left-0'></img>
        <img src={LUBack} className='absolute top-[5.56rem] left-0'></img>
        <img src={Desert} className='absolute top-[5.56rem] left-0'></img>
        <img src={LUFront} className='absolute top-[5.56rem] left-0'></img>

        <img src={Volcano} className='absolute top-[5.56rem] left-0'></img>
        <img src={Main} className='absolute top-[5.56rem] left-0'></img>

        
        <img src={Base} className='absolute top-[5.56rem] left-0'></img>

        <img src={LBBack} className='absolute top-[5.56rem] left-0'></img>
        <img src={Forest} className='absolute top-[5.56rem] left-0'></img>
        <img src={LBFront} className='absolute top-[5.56rem] left-0'></img>

        <img src={RBBack} className='absolute top-[2rem] left-0'></img>
        <img src={Swamp} className='absolute top-0 left-0'></img>
        <img src={RBFront} className='absolute top-[.56rem] left-0'></img>
        <img src={RUBack} className='absolute top-[5.56rem] left-0'></img>
        <img src={Ice} className='absolute top-[5.56rem] left-0'></img>
        <img src={RUFront} className='absolute top-[5.56rem] left-0'></img>
    </div>
    
  )
}
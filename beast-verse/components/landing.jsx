import React from 'react'
import {motion} from 'framer-motion'
import logo from '../assets/logo.png'
import Image from 'next/image'

export default function Landing() {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center'>
        <Image src={logo} alt="bv_logo" className='w-[40%]' />
    </div>
  )
}

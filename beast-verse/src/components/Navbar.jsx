import React from 'react'
import {motion} from 'framer-motion'
import logo from '../assets/logo.png'
import { HashLink as HLink} from "react-router-hash-link"
import Mobnav from './Mobnav'
import {Link} from "react-router-dom";


export default function Navbar({delay}) {
  return (<>
    <div className='fixed flex justify-center items-center w-full z-50 max-[740px]:hidden'>
    <motion.div
    
    initial={{y: -100}}
    animate={{y: 0}}
    transition={{
      duration: 1,
      delay: delay
    }}

    className='bg-gradient-to-br from-black to-slate-800 w-[70%] mt-3 container mx-auto rounded-xl drop-shadow-xl'>
        <div className='p-4 px-5 flex flex-row justify-between items-center max-h-20'>
            <Link to="/" className='cursor-pointer'>
                <img src={logo} alt="bv_logo" className='w-24' />
            </Link>
            <ul className='flex flex-row gap-5 font-Monstserrat font-bold text-blue-400 items-center'>

                <li className='hover:text-blue-300 cursor-pointer'><HLink to="/waitlist" smooth> <Link to="/"> Home </Link> </HLink></li>
            <li className='hover:text-blue-300 cursor-pointer'><HLink to="https://drive.google.com/file/d/1XArKw7O6Vf4cB0ldGHYymNuYcbU5wdzm/view" smooth>Whitepaper</HLink></li>
                <li className='text-gray-400 cursor-pointer'>MarketPlace <br /><span className='text-sm text-red-500'></span></li>
                <li className='text-gray-400 cursor-pointer'>Buy Eggs</li>
                <li className='text-blue-400 cursor-pointer'><a href="https://linktr.ee/realbeastverse">Socials</a></li>
                <li className='hover:text-blue-300 cursor-pointer'><HLink to="#AboutUs" smooth>About Us</HLink></li>

                <li className='bg-gradient-to-br from-[#6c7aca] to-[#8C9EFF] hover:to-[#8292EA] hover:from-[#6c7aca] text-white py-2 px-5 rounded-full cursor-pointer'><a href="https://discord.gg/JG9VAuJbD7">Join Discord</a></li>
                {/* <li className='bg-gradient-to-br from-green-600 to-lime-400 hover:to-green-600 hover:from-lime-500 text-white py-2 px-5 rounded-full cursor-pointer'><a href="https://forms.gle/kNn1TArMvbYRc3vj8">
                <Link to="/waitlist" className="">
                  Join Waitlist
                </Link>
                </a></li> */}

            </ul>
        </div>
        
    </motion.div>
    </div>
    <div className='min-[741px]:hidden'>
      <Mobnav/>
    </div>
    </>
  )
}

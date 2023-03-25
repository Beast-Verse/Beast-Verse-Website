import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/landing'
import AboutUs from '../components/Aboutus'
import Stats from '../components/stats'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
// import Domains from '../components/Domains'
// import HowToPlay from '../components/HowToPlay'
// import Monsters from '../components/Monsters'
import Footer from '../components/Footer'
import logo from '../assets/logo.png'


export default function Home() {
  return (
    <div><div className="overflow-x-hidden hidescrollbar max-[768px]:hidden">
        
    <Navbar delay={5}/>
    <Landing/>
    <AboutUs/>
    <Stats/>
    <Roadmap/>
    <Team/>
    {/* <Domains/> */}
    {/* <HowToPlay/> */}
    
    {/* <Monsters /> */}
    <Footer/>
  
</div>
<div className='bg-gradient-to-br from-black to-slate-800 h-[100vh] pt-5 md:hidden'>
  <div className='container mx-auto text-center text-white font-semibold font-Monstserrat h-[80vh] flex flex-col items-center justify-center'>
    <img src={logo} alt="bv_logo" className='w-80' />
    <h2 className='mx-10'>Open in Desktop/Laptop to get an Immersive Experience!</h2>
    <button className='border-white mt-10 hover:border-green-900 border-2 shadow-xl hover:shadow-sm font-bold text-xl bg-gradient-to-br from-green-600 to-lime-400 hover:to-green-600 hover:from-lime-500 text-white py-2 px-12 rounded-lg cursor-pointer'><a href="https://forms.gle/cu4EdYt3rEReyojx6">Join Waitlist</a></button>
  </div>
</div></div>
  )
}

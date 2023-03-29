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

import {BrowserRouter} from "react-router-dom"
import Mobland from '../components/Mobland';
import Mobabout from '../components/Mobabout';
import Mobstats from '../components/Mobstats';
import Eggs from '../components/Eggs';
import Mobroadmap from '../components/Mobroadmap';
import Mobteams from '../components/Mobteams';
import Mobnav from '../components/Mobnav';
import Mobfooter from '../components/Mobfooter';
import Partners from '../components/Partners';


export default function Home() {
  return (
    <div><div className="overflow-x-hidden hidescrollbar max-[768px]:hidden">
        
    <Navbar delay={5}/>
    <Landing/>
    <AboutUs/>
    <Partners/>
    <Stats/>
    <Roadmap/>
    <Team/>
    {/* <Domains/> */}
    {/* <HowToPlay/> */}
    
    {/* <Monsters /> */}
    <Footer/>
  
</div>


<div className='bg-gradient-to-br from-black to-slate-800 h-[100vh]  md:hidden'>
<Mobnav/>  
<Mobland/>
<Mobabout/>
<Eggs/>
<Partners/>
<Mobstats/>
<Mobroadmap/>
<Mobteams/>
<Mobfooter/>
</div>
</div>
  )
}

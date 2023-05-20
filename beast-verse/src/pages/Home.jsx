import React, { useEffect } from 'react'
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
import Web3 from "web3";
import axios from 'axios'

let url = "https://bvbackend-production.up.railway.app/api";


export default function Home() {

  const options = {
    method: 'GET',
    url: 'https://api.opensea.io/api/v1/collection/beastverse-game'
  };

  const [data, setData] = React.useState();
  const getData = async () => {
    axios
    .request(options)
    .then(function (response) {
      const stats = response.data.collection.stats
      console.log({total:3000, minted: stats.total_supply, volume: stats.total_volume});
      setData({total:3000, minted: stats.total_supply, volume: stats.total_volume})
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  

  return (
    <div><div className="overflow-x-hidden hidescrollbar max-[768px]:hidden">
        
    <Navbar delay={5}/>
    <Landing/>
    <AboutUs/>
    <Stats data={data? data:{total:"--", minted:"--", volume:"--"}}/>
    <Roadmap/>
    <Partners/>
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
<Mobstats data={data? data:{total:"--", minted:"--", volume:"--"}}/>
<Mobroadmap/>
<Partners/>
<Mobteams/>
<Mobfooter/>
</div>
</div>
  )
}

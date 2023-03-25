// import logo from './logo.svg';
import './App.css';
import AboutUs from "./components/Aboutus"
import Navbar from "./components/Navbar"
import Landing from "./components/landing"
import Roadmap from './components/Roadmap';
import Stats from "./components/stats"
// import Monsters from "./components/Monsters"
import Team from "./components/Team"
// import Domains from './components/Domains';
// import HowToPlay from './components/HowToPlay';
import Footer from './components/Footer';
import logo from './assets/logo.png'
// import { Route, Routes } from "react-router";

import {BrowserRouter} from "react-router-dom"
import Mobland from './components/Mobland';
import Mobabout from './components/Mobabout';
import Mobstats from './components/Mobstats';
import Eggs from './components/Eggs';
import Mobroadmap from './components/Mobroadmap';
import Mobteams from './components/Mobteams';
import Mobnav from './components/Mobnav';
import Mobfooter from './components/Mobfooter';



function App() {

  return (
    <>
    <BrowserRouter>
      <div className="overflow-x-hidden hidescrollbar max-[768px]:hidden">
        
        <Navbar/>
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
</BrowserRouter>

<BrowserRouter>
<div className='bg-gradient-to-br from-black to-slate-800 h-[100vh]  md:hidden'>
<Mobnav/>  
<Mobland/>
<Mobabout/>
<Eggs/>
<Mobstats/>
<Mobroadmap/>
<Mobteams/>
<Mobfooter/>
</div></BrowserRouter>
      
    </>
  );
}

export default App;

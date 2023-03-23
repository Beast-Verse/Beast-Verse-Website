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
      <div className='bg-gradient-to-br from-black to-slate-800 h-[100vh] pt-5 md:hidden'>
        <div className='container mx-auto text-center text-white font-semibold font-Monstserrat h-[80vh] flex flex-col items-center justify-center'>
          <img src={logo} alt="bv_logo" className='w-80' />
          <h2 className='mx-10'>Open in Desktop/Laptop to get an Immersive Experience!</h2>
          <button className='border-white mt-10 hover:border-green-900 border-2 shadow-xl hover:shadow-sm font-bold text-xl bg-gradient-to-br from-green-600 to-lime-400 hover:to-green-600 hover:from-lime-500 text-white py-2 px-12 rounded-lg cursor-pointer'>Pre-Register</button>
        </div>
      </div>
    </>
  );
}

export default App;

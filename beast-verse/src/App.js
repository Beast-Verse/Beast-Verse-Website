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
// import Footer from './components/Footer';



function App() {

  return (<>
    <div className="overflow-x-hidden bg-gradient-to-r from-[rgb(68,151,218)] to-[rgb(65,146,214)] max-[740px]:hidden">
      <Navbar/>
      <Landing/>
      <AboutUs/>
    <Stats/>
    <Team/>
    {/* <Domains/> */}
    {/* <HowToPlay/> */}
    <Roadmap/>
    {/* <Monsters /> */}
    {/* <Footer/> */}
    
    
    </div>
<div className='bg-gradient-to-br from-blue-700 to-blue-500 h-[100vh] pt-5 md:hidden'>
        <div className='container mx-auto text-center text-white font-semibold font-Monstserrat h-[80vh] flex flex-col items-center justify-center'>
          
          Not Available For Smart-Phones Yet!
        </div>
      </div>
  </>  
);
}

export default App;

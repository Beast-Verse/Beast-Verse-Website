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

  return (
    <div className="overflow-x-hidden bg-gradient-to-r from-[rgb(68,151,218)] to-[rgb(65,146,214)]">
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
  );
}

export default App;

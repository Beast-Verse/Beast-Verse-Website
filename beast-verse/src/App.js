import logo from './logo.svg';
import './App.css';
import AboutUs from "./components/Aboutus"
import Navbar from "./components/Navbar"
import Landing from "./components/landing"
// import Stats from "./components/stats";



function App() {

  return (
    <div className="overflow-x-hidden bg-gradient-to-r from-[rgb(68,151,218)] to-[rgb(65,146,214)]">

      <Navbar/>
      <Landing/>
     <AboutUs/>
     {/* <Stats/> */}
    </div>
  );
}

export default App;

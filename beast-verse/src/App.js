import logo from './logo.svg';
import './App.css';
import AboutUs from "./components/Aboutus"
import Navbar from "./components/Navbar"
import Landing from "./components/landing"


function App() {

  return (
    <div className="App overflow-hidden bg-gradient-to-r from-[rgb(68,151,218)] to-[rgb(65,146,214)]">

      <Navbar/>
      <Landing/>
     <AboutUs/>
    </div>
  );
}

export default App;

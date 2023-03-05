import logo from './logo.svg';
import './App.css';
import AboutUs from "./components/Aboutus"
import Navbar from "./components/Navbar"
import Landing from "./components/landing"


function App() {

  return (
    <div className="App">

      <Navbar/>
      <Landing/>
     <AboutUs/>
    </div>
  );
}

export default App;

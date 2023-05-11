// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mint from './components/mint';
import Home from './pages/Home';
import Waitlist from './pages/Waitlist';
import MintingTimer from './components/MintingTimer';





function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/waitlist" element={<Waitlist />}/> */}
        <Route path="/wearemintingfortestpurposesonly" element={<Mint />}/>
        <Route path="/timer" element={<MintingTimer />}/>
        <Route path="/" element={<Home />} exact/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

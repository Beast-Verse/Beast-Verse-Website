// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mint from './components/mint';
import Home from './pages/Home';
import Leaderboard from './components/leaderboard';
import MintingTimer from './components/MintingTimer';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/leaderboard" element={<Leaderboard />}/> */}
        <Route path="/wearemintingfortestpurposesonly" element={<Mint />}/>
        <Route path="/mint" element={<MintingTimer />}/>
        <Route path="/" element={<Home />} exact/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

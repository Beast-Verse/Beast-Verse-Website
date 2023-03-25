// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Waitlist from './pages/Waitlist';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/waitlist" element={<Waitlist />}/>
        <Route path="/" element={<Home />} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

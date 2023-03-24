import React, { useState } from "react";
import logo from "../assets/logo.png";

import { HashLink as Link } from "react-router-hash-link";

function Mobnav() {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div className="fixed top-0 w-full bg-gradient-to-br from-slate-black to-slate-800 ">
        <div className="flex flex-row justify-between items-center">
          <img src={logo} alt="bv_logo" className="w-24 p-2" />
          <div
          onClick={() => setOpen(!open)}
          className="text-3xl m-4 text-gray-100 font-bold cursor-pointer "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        </div>
       
        <ul className={`${open?'block':'hidden'} bg-gradient-to-br from-slate-900 to-slate-700  pl-3 `}>
          <li className="text-blue-300 text-xl max-[478px]:text-md  mb-2">
            <Link to="#Mobland" smooth>
              Home
            </Link>
          </li>
          <li className="text-gray-300 mb-2 justify-centre text-xl max-[478px]:text-md ">
            MarketPlace
          </li>
          <li className="text-gray-300 mb-2 text-centre text-xl max-[478px]:text-md ">
            Buy Eggs
          </li>
          <li className="text-blue-300 mb-2 text-centre text-xl max-[478px]:text-md ">
            About Us
          </li>
          
          <li className="text-[#6c7aca] mb-2 text-centre font-bold text-xl max-[478px]:text-md ">
            <a href="https://discord.gg/JG9VAuJbD7">Join Discord</a>
          </li>
          <li className="text-green-500 mb-2 text-centre font-bold text-xl max-[478px]:text-md ">
            <a href="https://forms.gle/kNn1TArMvbYRc3vj8">Join Waitlist</a>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}

export default Mobnav;

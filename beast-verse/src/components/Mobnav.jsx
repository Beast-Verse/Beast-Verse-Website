import React, { useState } from "react";
import logo from "../assets/logo.png";

import { HashLink as Link } from "react-router-hash-link";

function Mobnav() {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div className="fixed top-0 z-20 w-full  ">
        <div className="flex flex-row justify-between items-center">
          <img src={logo} alt="bv_logo" className="w-24 p-2" />
          <div
          onClick={() => setOpen(!open)}
          className="text-3xl m-4 text-gray-100 font-bold cursor-pointer "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        </div>
       
        <ul className={`${open?'block':'hidden'} w-fit text-center mx-auto `}>
          <li >
            <div className="grid grid-flow-col grid-cols-4 mx-auto gap-2 ">
            <Link className="text-blue-300 text-[2.8vw]  font-Montserrat font-semibold  rounded-xl px-3 py-2 bg-gradient-to-br from-slate-900 to-slate-700 mb-2" to="#Mobland" smooth>
            Home
          </Link>
          <h3 className="text-gray-300 text-[2.8vw]  font-Montserrat font-semibold rounded-xl px-3 py-2 bg-gradient-to-br from-slate-900 to-slate-700 mb-2">MarketPlace</h3>
          <h3 className="text-gray-300 text-[2.8vw]  font-Montserrat font-semibold rounded-xl px-3 py-2 bg-gradient-to-br from-slate-900 to-slate-700 mb-2">Buy Eggs</h3>
          <Link className="text-blue-300 text-[2.8vw]  font-Montserrat font-semibold rounded-xl px-3 py-2 bg-gradient-to-br from-slate-900 to-slate-700 mb-2" to="#Mobabout" smooth>
          About Us
          </Link>
          </div>
          </li>
           
          
          <li >

           <div className="grid grid-flow-row grid-cols-2 gap-4 w-[80%] mx-auto mt-2">
           <a className=" mb-2 rounded-xl py-2 bg-gradient-to-br from-[#6c7aca] to-[#8C9EFF]  text-white text-[3vw]  font-Montserrat font-semibold " href="https://discord.gg/JG9VAuJbD7">Join Discord</a>
            <a className=" mb-2 rounded-xl py-2 bg-gradient-to-br from-green-600 to-lime-400  text-white text-[3vw]  font-Montserrat font-semibold " href="https://forms.gle/kNn1TArMvbYRc3vj8">Join Waitlist</a>
          </div>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Mobnav;

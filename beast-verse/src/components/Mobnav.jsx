import React, { useState } from "react";
import logo from "../assets/logo.png";

import { HashLink as HLink } from "react-router-hash-link";
import {Link} from "react-router-dom";

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
       
        <ul className={`${open?'block':'hidden'} text-center mx-auto bg-gradient-to-b from-slate-700/0 to-slate-400/20 p-4 rounded-b-3xl backdrop-blur-sm`}>
          <li>
          <div className="grid grid-flow-col grid-cols-2 mx-auto gap-2 ">
          <h3 className="text-blue-300 text-[4vw]  font-Montserrat font-bold rounded-xl px-3 py-4 bg-gradient-to-br from-slate-900 to-slate-700 mb-2"><a href="https://drive.google.com/file/d/1s7H0uSHBkJJZISJE-9LrZkQThxoUTB8k/view?usp=share_link">Whitepaper</a></h3>
          <h3 className='text-blue-300 text-[4vw]  font-Montserrat font-bold rounded-xl px-3 py-4 bg-gradient-to-br from-slate-900 to-slate-700 mb-2'><a href="https://linktr.ee/realbeastverse">Socials</a></h3>
          </div>
          </li>
          
          <li >
            <div className="grid grid-flow-col grid-cols-2 mx-auto gap-2 ">
            <h3 className="text-gray-300 text-[4vw]  font-Montserrat font-bold rounded-xl px-3 py-4 bg-gradient-to-br from-slate-900 to-slate-700 mb-2">Buy Eggs</h3>
          <HLink className="text-blue-300 text-[4vw]  font-Montserrat font-bold rounded-xl px-3 py-4 bg-gradient-to-br from-slate-900 to-slate-700 mb-2" to="#Mobabout" smooth>
          About Us
          </HLink>
          </div>
          </li>

          <li >
            <div className="grid grid-flow-col grid-cols-2 mx-auto gap-2 ">
            <HLink className="text-blue-300 text-[4vw]  font-Montserrat font-bold  rounded-xl px-3 py-4 bg-gradient-to-br from-slate-900 to-slate-700 mb-2" to="#Mobland" smooth>
            Home
          </HLink>
          <h3 className="text-gray-300 text-[4vw]  font-Montserrat font-bold rounded-xl px-3 py-4 bg-gradient-to-br from-slate-900 to-slate-700 mb-2">MarketPlace</h3>
          
          </div>
          </li>
           
          
          <li >

           <div className="grid grid-flow-row grid-cols-1 gap-2">
           <a className=" mb-2 rounded-xl py-4 bg-gradient-to-br from-[#6c7aca] to-[#8C9EFF]  text-white text-[4vw]  font-Montserrat font-bold " href="https://discord.gg/JG9VAuJbD7">Join Discord</a>
          {/* <Link to="/waitlist" className=" mb-2 rounded-xl py-4 bg-gradient-to-br from-green-600 to-lime-400  text-white text-[4vw]  font-Montserrat font-bold ">
            <a  href="https://forms.gle/kNn1TArMvbYRc3vj8">Join Waitlist</a>
          </Link> */}
          </div>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Mobnav;

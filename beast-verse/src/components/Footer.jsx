// import { Link as RLink} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import React from "react";
import logo1 from "../assets/Youtube.svg";
import logo4 from "../assets/Instagram.svg";
import logo5 from "../assets/Twitter.svg";


function Footer(){
    return(<div>
        <div className="flex flex-row justify-between p-10 bg-slate-200 dark:text-slate-100 dark:bg-gray-800 max-[640px]:flex-col">
          <div className="flex flex-col justify-between">

            {/* <h1 className="font-[Montserrat] text-lg mt-5 ml-4"><flex className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-500">DIVERSION.</flex>TECH</h1> */}
            <ul className="font-[Montserrat] text-lg mt-5 ml-4">
              <li>
                <h1 className="font-[Montserrat] text-lg mt-5">
                  <span className="font-black">Email: </span>
                </h1>
              </li>
              <a href="mailto:realbeastverse@gmail.com">
                <li className="hover:text-blue-500">realbeastverse@gmail.com</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-[Montserrat] font-bold text-lg mt-5 ml-4">
              Useful Links
            </h1>
            <ul className="font-[Montserrat] text-lg mt-5 ml-4">
  
              <Link to="#Landing" smooth>
                <li className="hover:text-blue-500">Home</li>
              </Link>
              <Link to="#AboutUs" smooth>
                <li className="hover:text-blue-500">About Us</li>
              </Link>
              {/* <Rlink to="/">
                <li className="hover:text-blue-500">Guidelines</li>
              </Rlink> */}
              
  
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-[Montserrat] font-bold text-lg mt-5 ml-4">
              Our Social Networks
            </h1>
            <h1 className="font-[Montserrat] text-lg mt-5 ml-4">
              Reach to our socials to know more about us
            </h1>
  
            <div className="flex flex-row mt-5 ml-2 ">
              <a
                rel="noreferrer"
                href="https://www.youtube.com/@realbeastverse"
                target="_blank"
              >
                <img src={logo1} alt="img" className="w-8 mx-2" />
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/realbeastverse/"
                target="_blank"
              >
                <img src={logo4} alt="img" className="w-8 mx-2" />
              </a>
              <a
                rel="noreferrer"
                href="https://twitter.com/realbeastverse"
                target="_blank"
              >
                <img src={logo5} alt="img" className="w-8 mx-2" />
              </a>
            </div>
          </div>
        </div>
      </div>);
}

export default Footer;
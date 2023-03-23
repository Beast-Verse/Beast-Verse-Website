// import { Link as RLink} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import React from "react";

function openGmail(){
  var gmailUrl = "https://mail.google.com/mail/?extsrc=mailto&url=";
  var recipient = "realbeastverse@gmail.com"; // Change this to the desired recipient email address
  var mailtoUrl = "mailto:" + recipient;
  var finalUrl = gmailUrl + encodeURIComponent(mailtoUrl);
  window.open(finalUrl);
}


function Footer(){
    return(<div>
        <div className="flex flex-row justify-between px-32 py-10 bg-slate-200 dark:text-slate-100 dark:bg-gray-800 max-[640px]:flex-col">
          <div className="flex flex-col justify-between">

            {/* <h1 className="font-[Montserrat] text-lg mt-5 ml-4"><flex className="font-bold text-blue-500 text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-500">DIVERSION.</flex>TECH</h1> */}
            <ul className="font-[Montserrat] text-lg mt-5 ml-4">
              <li>
                <h1 className="font-[Montserrat] text-lg">
                  <span className="font-bold text-blue-500">Email: </span>
                </h1>
              </li>
              <div onClick={openGmail}>
                <li className="hover:text-blue-500 cursor-pointer mt-5">realbeastverse@gmail.com</li>
              </div>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-[Montserrat] font-bold text-blue-500 text-lg mt-5 ml-4">
              Useful Links
            </h1>
            <ul className="font-[Montserrat] text-lg mt-5 ml-4">
  
              <Link to="#Landing" smooth>
                <li className="hover:text-blue-500">Home</li>
              </Link>
              <Link to="#AboutUs" smooth>
                <li className="hover:text-blue-500">About Us</li>
              </Link>
              <Link to="#Team" smooth>
                <li className="hover:text-blue-500">Team</li>
              </Link>
              {/* <Rlink to="/">
                <li className="hover:text-blue-500">Guidelines</li>
              </Rlink> */}
              
  
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-[Montserrat] font-bold text-blue-500 text-lg mt-5 ml-4">
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
                className="text-red-600 pl-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85" fill="currentColor"/><path d="M93.333 117.558l61.334-34.89-61.334-34.893z" fill="#fff"/></svg>
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/realbeastverse/"
                target="_blank"
                className="text-white pl-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-100.7682 -167.947 873.3244 1007.682"><g fill="currentColor"><path d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959"/><path d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308"/></g></svg>
              </a>
              <a
                rel="noreferrer"
                href="https://twitter.com/realbeastverse"
                target="_blank"
                className="pl-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-44.7006 -60.54775 387.4052 363.2865"><path fill="#1da1f2" d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>);
}

export default Footer;
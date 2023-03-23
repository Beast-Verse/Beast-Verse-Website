import React from 'react'
import Common from "../assets/Common.png";
import Epic from "../assets/Epic.png";
import Legendary from "../assets/Legendary.png";
import Rare from "../assets/Rare.png";

function Eggs() {
  return (
    <div className='bg-gradient-to-b from-black to-slate-800 text-center py-20 pb-28'>
      <div className='flex flex-col'>
      <div className='flex flex-row mt-5 '>
      <div className='mx-10 items-center '><img className='' src={Common} alt=""></img></div>
      <div className=" bg-green-400/30 text-center border-2 border-green-700 rounded-xl mr-2">
            <h3 className="font-Montserrat font-bold text-green-500 pt-2 text-lg mb-3">Common Eggs</h3>
            <p className="text-white text-sm font-Montserrat px-3 pb-1">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non .</p>
          </div>
      </div>
      <div className='flex flex-row mt-5 '>
      <div className='mx-10 items-center '><img className='' src={Rare} alt=""></img></div>
      <div className=" bg-blue-400/30 text-center border-2 border-blue-700 rounded-xl mr-2">
            <h3 className="font-Montserrat font-bold text-blue-500 pt-3 text-lg mb-3 ">Rare Eggs</h3>
            <p className="text-white text-sm font-Montserrat px-3 pb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non .</p>
          </div>
      </div>
      <div className='flex flex-row mt-5 '>
      <div className='mx-10 items-center '><img className='' src={Epic} alt=""></img></div>
      <div className=" bg-purple-400/30 text-center border-2 border-purple-700  rounded-xl mr-2">
            <h3 className="font-Montserrat font-bold text-purple-500 pt-2 text-lg mb-3 ">Epic Eggs</h3>
            <p className="text-white text-sm font-Montserrat px-3 pb-1">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non .</p>
          </div>
      </div>
      <div className='flex flex-row mt-5 '>
      <div className='mx-10 items-center '><img className='' src={Legendary} alt=""></img></div>
      <div className=" bg-yellow-400/30 text-center border-2 border-yellow-700  rounded-xl mr-2">
            <h3 className="font-Montserrat font-bold text-yellow-500 pt-2 text-lg mb-3 ">Legendary Eggs</h3>
            <p className="text-white text-sm font-Montserrat px-3 pb-1">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non .</p>
          </div>
      </div>
      </div> 
    </div>
  )
}

export default Eggs

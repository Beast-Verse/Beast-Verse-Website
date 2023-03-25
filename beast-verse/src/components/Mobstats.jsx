import React from 'react'
import {motion} from "framer-motion"
function Mobstats() {
    const data = {
        supply: "TBD",
        minted: "0",
        volume: 0,
      };
  return (
    <div className='bg-gradient-to-b from-black to-slate-800 text-center py-20 pb-28'>
    <h2 className='text-[12vw] font-Montserrat text-blue-400 font-bold'>STATS</h2>

    <div className="flex items-center justify-center mt-28">
    <div className="relative mb-28 w-[90%]">
      <div className="absolute inset-3 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-2xl blur-xl animate-tilt "></div>
      <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-2xl animate-glow z-10"></div>
      <section className="relative px-7 py-4  my-1 bg-slate-800 rounded-2xl w-[98%] mx-auto flex flex-row justify-center items-center z-20 ">
        <div className="flex flex-col justify-center items-center">
        
          <motion.div initial={{opacity:0}}
    whileInView={{opacity:1}} transition={{duration: 1}} className="flex flex-col gap-12  max-[570px]:gap-9  justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-[6vw] font-Montserrat mt-4  pb-3 font-bold text-slate-200">
                TOTAL SUPPLY
              </span>
              <h2 className="text-[#7ae2ff] font-Montserrat text-5xl font-extrabold leading-none">
                {data.supply}
              </h2>
            </div>
            <div className="h-[2px] w-36 bg-blue-400"></div>
            <div className="flex flex-col items-center ">
              <span className="text-[6vw] pb-3 font-bold text-slate-200">
                MINTED
              </span>
              <h2 className="text-[#7ae2ff] font-Montserrat text-5xl font-extrabold leading-none ">
                {data.minted}
              </h2>
            </div>
            <div className="h-[2px] w-36 bg-blue-400"></div>
            <div className="flex flex-col items-center ">
              <span className="text-[6vw] pb-3 font-bold text-slate-200">
                VOLUME TRADED
              </span>
              <h2 className="text-[#7ae2ff] font-Montserrat text-5xl font-extrabold leading-none mb-6">
                {data.volume} ETH
              </h2>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
    
  </div>
    </div>
  )
}

export default Mobstats

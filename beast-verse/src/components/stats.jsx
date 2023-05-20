
import React from "react";
import {motion} from "framer-motion"
const Stats = ({data}) => {
  //Change Stats Here
  // const data = {
  //   supply: "3000",
  //   minted: "0",
  //   volume: "0",
  // };

  return (
    <div className="bg-gradient-to-b from-black to-slate-800 text-center py-20 pb-32">

      <div className="flex items-center justify-center mt-40">
        <div className="relative mb-12">
          <div className="absolute inset-3 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-2xl blur-xl animate-tilt "></div>
          <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-2xl animate-glow z-10"></div>
          <section className="relative px-7 py-4 mx-6 my-1 bg-slate-800 rounded-2xl lg:h-[250px] lg:w-[800px] flex flex-row justify-center items-center z-20">
            <div className="flex flex-col justify-center items-center">
              <div className="text-[200px] leading-none mt-36 font-bold absolute -z-10 text-blue-500/20">
                {" "}
                <span className="text-[500px] blur-sm leading-[0] font-bold animate-glow">
                  STATS
                </span>{" "}
              </div>
              <motion.div initial={{opacity:0}}
        whileInView={{opacity:1}} transition={{duration: 2}} className="flex flex-row gap-12 max-[640px]:flex-col justify-center items-center">
                <div className="flex flex-col items-center ">
                  <span className="text-xl mb-3 font-bold text-slate-200">
                    TOTAL SUPPLY
                  </span>
                  <h2 className="text-[#7ae2ff] font-Montserrat text-6xl font-extrabold leading-none  pt-3">
                    {data.total}
                  </h2>
                </div>
                <div className="w-[2px] h-40 bg-blue-400"></div>
                <div className="flex flex-col items-center ">
                  <span className="text-xl mb-3 font-bold text-slate-200">
                    MINTED
                  </span>
                  <h2 className="text-[#7ae2ff] font-Montserrat text-6xl font-extrabold leading-none  pt-3">
                    {data.minted}
                  </h2>
                </div>
                <div className="w-[2px] h-40 bg-blue-400"></div>
                <div className="flex flex-col items-center ">
                  <span className="text-xl mb-3 font-bold text-slate-200">
                    VOLUME
                  </span>
                  <h2 className="text-[#7ae2ff] font-Montserrat text-[3.2rem] font-extrabold leading-none pt-3">
                    {data.volume} ETH
                  </h2>
                </div>
              </motion.div>
            </div>
          </section>
          
        </div>
        
      </div>

      <div className='flex flex-row items-start justify-center'>
            <div className=' flex flex-col items-center'>
                <div className='h-5 overflow-hidden'>
                </div>
                <div className='p-10 px-0 border border-y-4 border-blue-500 border-x-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-slate-900/70 flex flex-col items-center justify-center'>
                    {/* <img src={nftcal} alt="nftcal" className='w-40'/> */}
                    <div className='text-white font-Montserrat text-xl flex items-center justify-center flex-col'>
                      <h2 className="text-4xl font-bold text-cyan-300">ANNOUNCEMENTS</h2>
                      <h3 className="w-[80%] mb-5 text-left mt-10">Each phase of the launch will have <span className="font-bold text-blue-500">300 NFTs</span>  , thus <span className="font-bold text-blue-500">10 phases</span> in total rolling out weekly</h3>

                      <div className="flex flex-row gap-y-6 gap-x-16 items-start justify-start w-[80%]">
                      <div>
                      <h3 className=" text-left"><span className="font-bold text-blue-500">Out of those 300, there will be:</span><br />
                        - 125 <span className="text-green-300">Common</span> <br />
                        - 100 <span className="text-blue-300">Rare</span> <br />
                        - 50 <span className="text-purple-300">Epic</span> <br />
                        - 25 <span className="text-yellow-300">Legendary </span> NFTs</h3>
                        </div>
                        <div>
                      <h3 className=" text-left"><span className="font-bold text-blue-500">Prices of first mint will be:</span><br />
                        (5 MATIC) - <span className="text-green-300">Common</span> <br />
                        (7 MATIC) - <span className="text-blue-300">Rare</span> <br />
                        (9 MATIC) - <span className="text-purple-300">Epic</span> <br />
                        (11 MATIC) - <span className="text-yellow-300">Legendary</span></h3>
                        </div>
                      </div>
                      <h3 className="w-[80%] mb-5 text-center text-lg mt-10">*With each phase the price of each rarity will be incremented by 2 MATIC.</h3>
                    </div>
                </div>
            </div>
      </div>

    </div>
  );
};

export default Stats;

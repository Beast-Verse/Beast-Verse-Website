
import React from "react";

const Stats = () => {
  //Change Stats Here
  const data = {
    supply: 3000,
    minted: 300,
    volume: 2,
  };

  return (
    <div className="bg-gradient-to-b from-black to-slate-800 text-center py-20 pb-32">

      {/* <div className="grid grid-flow-col grid-cols-3">
        <div className="bg-[#f0ffe9] py-7 w-[80%] mx-auto rounded-xl border-l-8 border-[#97df75] flex flex-col justify-center items-center drop-shadow-green">
          <h2 className="text-[#97df75] font-Montserrat text-[5vw] font-extrabold leading-none">
            {data.supply}
          </h2>
          <h3 className="text-[#97df75] font-bold font-Montserrat text-[2vw]">
            Total Supply
          </h3>
        </div>

        <div className="bg-[#e1f8ff] py-7 w-[80%] mx-auto rounded-xl border-b-8 border-[#7ae2ff] flex flex-col justify-center items-center drop-shadow-blue">
          <h2 className="text-[#7ae2ff] font-Montserrat text-[5vw] font-extrabold leading-none">
            {data.minted}
          </h2>
          <h3 className="text-[#7ae2ff] font-bold font-Montserrat text-[2vw]">
            Minted
          </h3>
        </div>

        <div className="bg-[#fff4e9] py-7 w-[80%] mx-auto rounded-xl border-r-8 border-[#ffb56d] flex flex-col justify-center items-center drop-shadow-orange">
          <h2 className="text-[#ffb56d] font-Montserrat text-[5vw] font-extrabold leading-none">
            {data.volume} ETH
          </h2>
          <h3 className="text-[#ffb56d] font-bold font-Montserrat text-[2vw]">
            Volume Traded
          </h3>
        </div>
      </div> */}

      <div className="flex items-center justify-center mt-40">
        <div className="relative mb-32">
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
              <div className="flex flex-row gap-12 max-[640px]:flex-col justify-center items-center">
                <div className="flex flex-col items-center ">
                  <span className="text-xl mb-3 font-bold text-slate-200">
                    TOTAL SUPPLY
                  </span>
                  <h2 className="text-[#7ae2ff] font-Montserrat text-[5vw] font-extrabold leading-none  pt-3">
                    {data.supply}
                  </h2>
                </div>
                <div className="w-[2px] h-40 bg-blue-400"></div>
                <div className="flex flex-col items-center ">
                  <span className="text-xl mb-3 font-bold text-slate-200">
                    MINTED
                  </span>
                  <h2 className="text-[#7ae2ff] font-Montserrat text-[5vw] font-extrabold leading-none  pt-3">
                    {data.minted}
                  </h2>
                </div>
                <div className="w-[2px] h-40 bg-blue-400"></div>
                <div className="flex flex-col items-center ">
                  <span className="text-xl mb-3 font-bold text-slate-200">
                    VOLUME TRADED
                  </span>
                  <h2 className="text-[#7ae2ff] font-Montserrat text-[5vw] font-extrabold leading-none pt-3">
                    {data.volume} ETH
                  </h2>
                </div>

                
              </div>
            </div>
          </section>
          
        </div>
        
      </div>

    </div>
  );
};

export default Stats;

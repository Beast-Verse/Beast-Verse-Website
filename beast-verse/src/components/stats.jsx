import React from "react";
// import { motion} from "framer-motion";
// import React, {useRef} from "react";

// const ref = useRef(null);
// const isInView = useInView(ref);

function Stats(){

    // const ref = useRef(null);

    return( <div  className="bg-black text-center">
        <h2 className="text-[6vw] mx-auto font-medium pt-4 font-Monstserrat text-white ">Stats</h2>

        <div className="grid grid-flow-col grid-cols-3">
           <div className="bg-[#f0ffe9] pb-7 w-[80%] mx-auto rounded-xl border-l-8 border-[#97df75] drop-shadow-green">
                <h2 className="text-[#97df75] font-Montserrat text-[7vw] font-extrabold">3000</h2>
                <h3 className="text-[#97df75] font-bold font-Montserrat text-[2vw]">Total Supply</h3>
           </div>
                
           <div className="bg-[#e1f8ff] pb-7 w-[80%] mx-auto rounded-xl border-b-8 border-[#7ae2ff]  drop-shadow-blue">
                <h2 className="text-[#7ae2ff] font-Montserrat text-[7vw] font-extrabold">300</h2>
                <h3 className="text-[#7ae2ff] font-bold font-Montserrat text-[2vw]">Minted</h3>
           </div>

           <div className="bg-[#fff4e9] pb-7 w-[80%] mx-auto rounded-xl border-r-8 border-[#ffb56d] drop-shadow-orange">
                <h2 className="text-[#ffb56d] font-Montserrat text-[7vw] font-extrabold">2 ETH</h2>
                <h3 className="text-[#ffb56d] font-bold font-Montserrat text-[2vw]">Volume Traded</h3>
           </div>
       </div>
       </div>
    );
}

export default Stats;
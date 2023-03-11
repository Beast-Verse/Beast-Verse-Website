import React from "react";
// import { motion} from "framer-motion";
// import React, {useRef} from "react";

// const ref = useRef(null);
// const isInView = useInView(ref);

function Stats(){

    // const ref = useRef(null);

    return( <div  className="bg-black text-center">
        <h2 className="text-[6vw] mx-auto font-medium pt-4 font-Monstserrat text-white">Stats</h2>

        <div className="grid grid-flow-col grid-cols-3">
           <div>
                <h2 className="text-white font-Ruslan text-[8vw]">300</h2>
                <h3 className="text-white font-Monstserrat text-[2vw]">Eggs Minted</h3>
           </div>
                
           <div>
                <h2 className="text-white font-Ruslan text-[8vw]">69</h2>
                <h3 className="text-white font-Monstserrat text-[2vw]">Eggs Sold</h3>
           </div>

           <div>
                <h2 className="text-white font-Ruslan text-[8vw]">2 ETH</h2>
                <h3 className="text-white font-Monstserrat text-[2vw]">Volume Traded</h3>
           </div>
       </div>
       </div>
    );
}

export default Stats;
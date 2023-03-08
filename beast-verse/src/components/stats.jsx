import React, {useRef} from "react";
import { motion} from "framer-motion";
// import React, {useRef} from "react";

// const ref = useRef(null);
// const isInView = useInView(ref);

function Stats(){

    // const ref = useRef(null);

    return( <motion.div initial={{ opacity: 0, x:-150 }}
        whileInView={{ opacity: 1, x:0, transition:{duration: 1.3} }}
        viewport={{ once:true }} className="bg-black text-center">
        <motion.h2 className="text-[6vw] mx-auto font-medium pt-4 font-Monstserrat text-white">Stats</motion.h2>

        <motion.div className="grid grid-flow-col grid-cols-3">
            <motion.div>
                <h2 className="text-white font-Ruslan text-[8vw]">300</h2>
                <h3 className="text-white font-Monstserrat text-[2vw]">Eggs Minted</h3>
            </motion.div>
                
            <motion.div>
                <h2 className="text-white font-Ruslan text-[8vw]">69</h2>
                <h3 className="text-white font-Monstserrat text-[2vw]">Eggs Sold</h3>
            </motion.div>

            <motion.div>
                <h2 className="text-white font-Ruslan text-[8vw]">2 ETH</h2>
                <h3 className="text-white font-Monstserrat text-[2vw]">Volume Traded</h3>
            </motion.div>
        </motion.div>
        </motion.div>
    );
}

export default Stats;
import React from "react";
import { motion } from "framer-motion"
import { useRef } from "react";

function Howtoplay(){


    return <div className="bg-slate-900 ">
        <motion.div initial={{ opacity: 0, y:-60 }}
        whileInView={{ opacity: 1, y:0, transition:{duration: 1.3} }}
        viewport={{ once:true }} >
            <h1 className="font-Monstserrat text-center font-medium text-[4vw] text-white">How to Play?</h1>
            </motion.div>
    </div>
}

export default Howtoplay;
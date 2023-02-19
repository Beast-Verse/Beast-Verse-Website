import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"
import { useRef } from "react";

function Infotemp(props){

    const scrollRef = useRef(null)
    return <div className="bg-slate-900 h-[50vw]">

    <div>

    <motion.div initial={{ opacity: 0, x:-200 }}
        whileInView={{ opacity: 1, x:0, transition:{duration: 1.3} }}
        viewport={{ root: scrollRef }} className="w-[40%] relative left-[10vw] top-[6vw]">
    
    <div className="z-10 relative">
    <h1 className="drop-shadow-wxl text-[3.5vw] font-Monstserrat font-medium text-white">{props.first} <span className={props.color}>{props.second}</span></h1>
    <p className="leading-loose mt-4 text-[1.1vw] font-Montserrat text-white drop-shadow-wxl ">{props.description}</p>
    </div>


    </motion.div>  


    <motion.div initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x:0, transition:{duration: 1.3} }}
        viewport={{ root: scrollRef }}>
    <Image src={props.image} className="relative w-[25vw] bottom-[20vw] left-[65vw] drop-shadow-pic"></Image>
    </motion.div>


    </div>


    </div>
}

export default Infotemp;
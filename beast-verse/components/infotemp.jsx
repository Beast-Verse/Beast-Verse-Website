import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"
import { useRef } from "react";


function Infotemp(props){


    return <div className="bg-slate-900 ">
        
    <div>

    <motion.div initial={{ opacity: 0, x:-150 }}
        whileInView={{ opacity: 1, x:0, transition:{duration: 1.3} }}
        viewport={{ once:true }}
         className="w-[40%] relative left-[10vw] top-[6vw]">
    
    <div className="">
    <h2 className="drop-shadow-wxl text-[3.5vw] font-Monstserrat font-medium text-white">{props.first} <span className={props.color}>{props.second}</span></h2>
    <p className="leading-loose mt-4 text-[1.1vw] font-Montserrat text-white drop-shadow-wxl ">{props.description}</p>
    </div>


    </motion.div>  

    <motion.div initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x:0, transition:{duration: 1.3} }}
        viewport={{ once:true }}>
    <Image src={props.image} className="relative w-[25vw] bottom-[20vw] left-[65vw] drop-shadow-pic"></Image>
    </motion.div>

    </div>

    <div className="w-[80%] mx-auto">
    <motion.h2 initial={{opacity:0, y:-100}} whileInView={{opacity: 1, y:0, transition:{duration:1.3}}} viewport={{once:true}} className="mb-10 drop-shadow-wxl text-[3.5vw] font-Monstserrat font-medium text-white">Screen Shots</motion.h2>
    
    <motion.div initial={{opacity:0, x:150}} whileInView={{opacity: 1, x:0, transition:{duration:1.3}}} viewport={{once:true}} className="my-8">
    <Image src={props.ss1} className="rounded-2xl border-2 border-green-400"></Image>
    <p className="text-white text-[1.5vw] font-Monstserrat p-3">{props.desc1}</p>
    </motion.div>

    <motion.div initial={{opacity:0, x:-150}} whileInView={{opacity: 1, x:0, transition:{duration:1.3}}} viewport={{once:true}}>
    <Image src={props.ss2} className="rounded-2xl border-2 border-green-400"></Image>
    <p className="text-white text-[1.5vw] font-Monstserrat p-3">{props.desc2}</p>
    </motion.div>

    <motion.div initial={{opacity:0, x:150}} whileInView={{opacity: 1, x:0, transition:{duration:1.3}}} viewport={{once:true}} className="my-8">
    <Image src={props.ss3} className="rounded-2xl border-2 border-green-400"></Image>
    <p className="text-white text-[1.5vw] font-Monstserrat p-3">{props.desc3}</p>
    </motion.div>

    <motion.div initial={{opacity:0, x:-150}} whileInView={{opacity: 1, x:0, transition:{duration:1.3}}} viewport={{once:true}}>
    <Image src={props.ss4} className="rounded-2xl border-2 border-green-400"></Image>
    <p className="text-white text-[1.5vw] font-Monstserrat p-3">{props.desc4}</p>
    </motion.div>

    </div>

    </div>
}

export default Infotemp;
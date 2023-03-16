import React, {useRef} from "react";
import Ice from "../assets/Ice.png"
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import Left from "../assets/left.png"
import Right from "../assets/Right.png"
import All from "../assets/All.png"
import Stats from "./stats";
import Monsters from "./Monsters";

// import Image from "react/Image"
function AboutUs(){
    // const scrollRef = useRef(null)
    
    
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
      });
console.log(scrollYProgress);

//   const isInView = useInView(ref);
// console.log(isInView);


    const move1 = useTransform(
        scrollYProgress,
        [0, 1],
        ["1vw", "-100vw"],
        { clamp: false }
    );

    const scale = useTransform(
        scrollYProgress,
        [0,1],
        [1, 1.5]
    )

    const move2 = useTransform(
        scrollYProgress,
        [0, 1],
        ["-1vw", "100vw"],
        { clamp: false }
    )

    const moveY1 = useTransform(
        scrollYProgress,
        [0,1],
        ["0", "10vw"],
        {clamp: false}
    )

    const moveY2 = useTransform(
        scrollYProgress,
        [0,1],
        ["0", "12vw"],
        {clamp: false}
    )

    const opScene = useTransform(
        scrollYProgress,
        [0,1],
        [0, 1],
    )
//   const scaleX = useSpring(scrollYProgress, {
//     x:1000});

    return (<div className=" w-screen pt-10 bg-black h-[200vw]">
{/* <motion.div style={{ scaleX: scrollYProgress }} /> */}
{/* <motion.div className="origin-top-left fixed z-50 top-0 left-0 right-0 transform-none bg-red-500 h-2" style={{ scaleX: scrollYProgress}}/> */}
        <h2 className="text-[4.5vw] pl-10 font-Montserrat font-semibold text-white">What is <span className="font-Ruslan">Beast Verse</span></h2>

        <div className="grid grid-flow-col grid-cols-2">
            <div className="pl-[3vw]">
                <p className="font-Montserrat text-[1.2vw] pt-4 text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>

            <div className="mx-auto">
            <iframe className="rounded-2xl border-8 border-double border-white" width="560" height="315" src="https://www.youtube.com/embed/EQGig40g5wM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </div>

        <div>
            <motion.div ref={ref} style={{transformY:moveY1, transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)"}} className="flex pt-[20rem] z-30 mx-auto">
                <motion.img style={{translateX: move1, transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1)", scale: scale}} viewport={{ once:true }} className=" relative z-20" src={Left} ></motion.img>
                
                <motion.img style={{ translateX:move2, transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1)", scale: scale }} viewport={{ once:true }} src={Right} className="z-20 relative min-[1280px]:right-[98vw] min-[2000px]:right-[90vw]"></motion.img>
            

            </motion.div>

            <motion.div ref={{ref}} style={{translateY:moveY2, opacity: opScene, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)"}} className="z-0 absolute top-[110vw]">
            <motion.img src={All} className=""></motion.img>   
            <Stats/>   
            <Monsters/>          
            </motion.div>

            
        </div>

        
    </div>)
}

export default AboutUs;
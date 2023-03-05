import React, {useRef} from "react";
import Ice from "../assets/Ice.png"
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import Left from "../assets/left.png"
import Right from "../assets/Right.png"
// import Image from "react/Image"
function AboutUs(){
    // const scrollRef = useRef(null)
    const { scrollY } = useScroll();
    
    const ref = useRef(null);
  const isInView = useInView(ref);
console.log(isInView);
    const move = useTransform(
        scrollY,
        [-1, 0, 1],
        [0,0, -200],
        { clamp: false }
    )
//   const scaleX = useSpring(scrollYProgress, {
//     x:1000});

    return (<div  className="pl-[2vw] w-screen pt-10 bg-black ">
{/* <motion.div style={{ scaleX: scrollYProgress }} /> */}
<motion.div className="origin-top-left fixed top-0 left-0 right-0 transform-none bg-red-500 h-2" style={{ x: move}}/>
        <h2 className="text-[4.5vw] font-Montserrat font-semibold text-white">What is <span className="font-Ruslan">Beast Verse</span></h2>

        <div className="grid grid-flow-col grid-cols-2">
            <div className="pl-[3vw]">
                <p className="font-Montserrat text-[1.2vw] pt-4 text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>

            <div className="mx-auto">
            <iframe className="rounded-2xl border-8 border-double border-white" width="560" height="315" src="https://www.youtube.com/embed/EQGig40g5wM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </div>

        <div>
            <div style={{ overflow: "scroll" }}>
            <motion.img ref={ref} style={{ transform: isInView ? "none" : move, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}
        viewport={{ once:true }} src={Left} className="w-full h-full"></motion.img>
        <motion.img  initial={{ x:0}} whileFocus={{ scale: 1.2 }}
        whileInView={{ x:move, transition:{duration: 3} }}
        viewport={{ once:true }} src={Right} className="relative max-[1440px]:bottom-[55vw] min-[1441px]:bottom-[54.2vw]"></motion.img>
            </div>
        </div>
    </div>)
}

export default AboutUs;
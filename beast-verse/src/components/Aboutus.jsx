import React, {useRef} from "react";
import Ice from "../assets/Ice.png"
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import Left from "../assets/left.png"
import Right from "../assets/Right.png"
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
        [0, -600],
        // { clamp: false }
    );

    const scale = useTransform(
        scrollYProgress,
        [0,1],
        [1, 1.3]
    )

    const move2 = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 600],
        // { clamp: false }
    )
//   const scaleX = useSpring(scrollYProgress, {
//     x:1000});

    return (<div className="pl-[2vw] w-screen pt-10 bg-black ">
{/* <motion.div style={{ scaleX: scrollYProgress }} /> */}
<motion.div className="origin-top-left fixed z-50 top-0 left-0 right-0 transform-none bg-red-500 h-2" style={{ scaleX: scrollYProgress}}/>
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
            <div ref={ref} style={{overflow: "scroll" }}>
            <motion.img style={{translateX: move1, transition: "all 4s cubic-bezier(0.17, 0.55, 0.55, 1)", scale: scale}}
        viewport={{ once:true }} src={Left} ></motion.img>
        <motion.img style={{ translateX:move2,transition: "all 4s cubic-bezier(0.17, 0.55, 0.55, 1)", scale: scale }}
        viewport={{ once:true }} src={Right} className="relative max-[1440px]:bottom-[55vw] min-[1441px]:bottom-[54.2vw]"></motion.img>
            </div>
        </div>
    </div>)
}

export default AboutUs;
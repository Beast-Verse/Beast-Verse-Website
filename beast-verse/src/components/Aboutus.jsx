import React, { useRef} from "react";

// import Ice from "../assets/Ice.png"
import {
  motion,
  useScroll,
  // useInView,
  useTransform,
} from "framer-motion";
import Left from "../assets/left.png";
import Right from "../assets/Right.png";




import All from "../assets/All.png";
import { useState } from "react";



// import Image from "react/Image"
function AboutUs() {
  // const scrollRef = useRef(null)



  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  console.log(scrollYProgress);

  //   const isInView = useInView(ref);
  // console.log(isInView);

  const move1 = useTransform(scrollYProgress, [0, 0.5, 1], ["1vw", "-50vw", "-150vw"], {
    clamp: false,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [.7, 1]);

  const move2 = useTransform(scrollYProgress, [0, .5,  1], ["-1vw", "50vw", "150vw"], {
    clamp: false,
  });

  const moveY1 = useTransform(scrollYProgress, [0, .25, .5, .75, 1], ["0vw", "0vw", "0vw", "5vw", "10vw"], {
    clamp: false,
  });

  const moveY2 = useTransform(scrollYProgress, [0, .25, .5, .75, 1], ["0vw", "0vw", "0vw", "2vw", "4vw"], {
    clamp: false,
  });

  // const moveY2 = useTransform(scrollYProgress, [0, 1], ["0", "12vw"], {
  //   clamp: false,
  // });

  const opScene = useTransform(scrollYProgress, [0, 1], [0.3 , 1]);
  //   const scaleX = useSpring(scrollYProgress, {
  //     x:1000});



  var x = window.matchMedia("(max-width: 1500px)")

  let moveY;

  if(x.matches){
    moveY = moveY1
  }

  else{
    moveY = moveY2;
  }



  return (
    <div className=" w-screen pt-10 bg-black h-[120vw]" id="AboutUs">
      {/* <motion.div style={{ scaleX: scrollYProgress }} /> */}
      {/* <motion.div className="origin-top-left fixed z-50 top-0 left-0 right-0 transform-none bg-red-500 h-2" style={{ scaleX: scrollYProgress}}/> */}
      <h2 className="text-[4.5vw] text-center font-Montserrat font-semibold text-white">
        What is <span className=" text-green-500">Beast Verse</span> ?
      </h2>

      <div className="grid grid-flow-col grid-cols-2 mt-20 mx-auto">
        <div className="px-20">
          <p className="font-Montserrat text-[1.1vw] pt-4 text-white">
            
            <b className="text-green-400">Beast Verse </b>is a <b className="text-green-400"> Play-to-earn PvP </b> NFT game,
            built on the <b className="text-purple-500"> Polygon Blockchain. </b> <br /> <br />
            We are creating a virtual world where players can explore different
            terrains, choose their favorite beasts and fight their way to
            victory. Our use of the Polygon Blockchain ensures that the game is
            <b className="text-green-400"> secure and transparent </b>, which is essential for players who value
            their personal information and assets. <br /><br ></br>
            So, jump into your <b className="text-green-400"> favorite terrain </b>, choose your <b className="text-green-400"> favorite beasts </b>,
            and fight your way through to become the <b className="text-green-400"> Mightiest of All Masters! </b>
            <br /> <br />
            
          </p>
        </div>

        <div className="mx-auto">
          <iframe
            className="rounded-2xl shadow-2xl shadow-blue-500/50"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AMt5x44k1FY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

        <h2 className="text-center text-white text-5xl mt-16 font-Montserrat font-semibold">See you in <span className=" text-green-500">Beast Verse!</span></h2>

      <div>
        <motion.div
          ref={ref}
          style={{
            translateY: moveY,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className="flex pt-[15rem] relative mx-auto"
        >
          <motion.img
            style={{
              translateX: move1,
              transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1)",
              scale: scale,
            }}
            viewport={{ once: true }}
            className="z-10 relative"
            src={Left}
          ></motion.img>

          <motion.img
            style={{
              translateX: move2,
              transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1)",
              scale: scale,
            }}
            viewport={{ once: true }}
            src={Right}
            className="z-10 relative min-[1280px]:right-[98vw] min-[2000px]:right-[90vw]"
          ></motion.img>




<motion.div
          ref={{ ref }}
          style={{
            translateY: moveY,
            scale: scale2,
            opacity: opScene,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className="z-0 absolute bottom-[10vw]"
        >
          <motion.img src={All} className="">
            
          </motion.img>
          <div className="w-[15rem] absolute bottom-[11vw] left-[4.5vw] opacity-0 hover:opacity-100 transition-all duration-500 bg-green-400/30 text-center border-2 border-green-700 rounded-xl">
            <h3 className="font-Montserrat font-bold text-green-500 pt-3 text-[1.7rem] mb-3">Common Eggs</h3>
            <p className="text-white font-Montserrat px-4 pb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          </div>


          <div className="w-[15rem] absolute bottom-[11vw] left-[29vw] opacity-0 hover:opacity-100 transition-all duration-500 bg-blue-400/30 text-center border-2 border-blue-700 rounded-xl">
            <h3 className="font-Montserrat font-bold text-blue-500 pt-3 text-[1.7rem] mb-3">Rare Eggs</h3>
            <p className="text-white font-Montserrat px-4 pb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          </div>

          <div className="w-[15rem] absolute bottom-[11vw] left-[55vw] opacity-0 hover:opacity-100 transition-all duration-500 bg-purple-400/30 text-center border-2 border-purple-700 rounded-xl">
            <h3 className="font-Montserrat font-bold text-purple-500 pt-3 text-[1.7rem] mb-3">Epic Eggs</h3>
            <p className="text-white font-Montserrat px-4 pb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          </div>

          <div className="w-[15rem] absolute bottom-[11vw] left-[79.5vw] opacity-0 hover:opacity-100 transition-all duration-500 bg-yellow-400/30 text-center border-2 border-yellow-700 rounded-xl">
            <h3 className="font-Montserrat font-bold text-yellow-500 pt-3 text-[1.7rem] mb-3">Legendary Eggs</h3>
            <p className="text-white font-Montserrat px-4 pb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          </div>
        </motion.div>


        </motion.div>

       
      </div>
    </div>
  );
}

export default AboutUs;

import React from "react";
// import bg from "../public/bg.jpeg"
// import Image from "next/image";
import Link from "next/link";


function Landing(){
    return (
        <div className="bg-contain bg-no-repeat bg-[url('../public/bg.jpeg')] m-0 h-[56.25vw] max-[648px]:w-[100vw]">
            <div className=" mx-auto relative top-[20vw] w-[45%] backdrop-blur-lg border-2 rounded-lg backdrop-brightness-[.8] pb-10 max-[648px]:w-[75%]">
                <h1 className="text-center py-[2vw] text-[5vw] max-[648px]:text-[8vw] text-white font-Ruslan">Beast Verse</h1>
                <div className="grid min-[649px]:grid-flow-col min-[649px]:grid-cols-2 max-[648px]:grid-flow-row max-[648px]:gap-7 max-[648px]:grid-rows-2 w-[70%] mx-auto">
                    <Link href="https://opensea.io/collection/beast-verse-coupons" className=" w-[70%] mx-auto">
                        <button className="bg-blue-500 font-Ruslan text-white hover:bg-cyan-400 hover:text-[1.2vw] text-[1.1vw] max-[648px]:text-[3.2vw] max-[648px]:hover:text-[3.5vw] transition-all duration-100 w-full rounded-lg border-2 pt-[3.5vw] pb-[3.4vw]">Get an Egg</button>
                    </Link>
                    <button className="bg-blue-500 font-Ruslan text-white hover:bg-cyan-400 hover:text-[1.2vw] text-[1.1vw] transition-all duration-100 max-[648px]:text-[3.2vw] max-[648px]:hover:text-[3.5vw] w-[70%] mx-auto rounded-lg border-2 pt-[3.5vw] pb-[3.4vw]" >Play Now!</button>
                </div>
            </div>
        </div>
    );
}

export default Landing;
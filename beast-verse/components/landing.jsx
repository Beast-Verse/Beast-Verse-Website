import React from "react";
// import bg from "../public/bg.jpeg"
// import Image from "next/image";
import Link from "next/link";


function Landing(){
    return (
        <div className="bg-contain bg-no-repeat bg-[url('../public/bg.jpeg')] h-[56.5vw]">
            <div className=" mx-auto relative top-[35vh] w-[45%] backdrop-blur-lg border-2 rounded-lg backdrop-brightness-[.8] pb-10">
                <h1 className="text-center py-10 text-[5vw] text-white font-Ruslan">Beast Verse</h1>
                <div className="grid grid-flow-col grid-cols-2 w-[80%] mx-auto">
                    <Link href="https://opensea.io/collection/beast-verse-coupons" className=" w-[70%] mx-auto">
                        <button className="bg-blue-500 font-Ruslan text-white hover:bg-cyan-400 hover:text-[1.2vw] transition-all duration-100 w-full rounded-lg border-2 pt-[1.7vw] pb-[1.6vw]">Get an Egg</button>
                    </Link>
                    <button className="bg-blue-500 font-Ruslan text-white hover:bg-cyan-400 hover:text-[1.2vw] transition-all duration-100 w-[70%] mx-auto rounded-lg border-2 pt-[1.7vw] pb-[1.6vw]" >Play Now!</button>
                </div>
            </div>
        </div>
    );
}

export default Landing;
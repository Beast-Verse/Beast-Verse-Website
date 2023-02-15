import React from "react";
// import bg from "../public/bg.jpeg"
// import Image from "next/image";

function Landing(){
    return (
        <div className="bg-contain bg-no-repeat bg-[url('../public/bg.jpeg')] h-[100vw]">
            <div className=" mx-auto relative top-[35vh] w-[45%] h-[50vh] backdrop-blur-lg border-2 rounded-lg backdrop-brightness-[.8] ">
                <h1 className="text-center ">Beast Verse</h1>
            </div>
        </div>
    );
}

export default Landing;
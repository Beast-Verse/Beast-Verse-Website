import React from "react";

function Infotemp(props){
    return <div className="bg-gray-900 h-[50vw]">

    <div>

    <div className="w-[40%] relative left-[10vw] top-[6vw]">
        <div className="z-10 relative">
    <h1 className="text-[3.5vw] font-Monstserrat font-medium text-white">{props.first} <span className={props.color}>{props.second}</span></h1>
    <p className="leading-loose mt-4 text-[1.1vw] font-Montserrat text-white">{props.description}</p>
    </div>
    <div className="w-full h-[30vw] bg-slate-800 relative bottom-[30vw] rounded-2xl z-0 blur-3xl"></div>
    </div>  




    </div>


    </div>
}

export default Infotemp;
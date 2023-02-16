import React from "react";
import { useState } from "react";
import Forest from "./forest";
import Lava from "./lava"
import Swamp from "./swamp"
import Ice from "./ice"
import Desert from "./desert"


function Buttonsec(){
    const[show1, setShow1] = useState(true);
    const[show2, setShow2] = useState(false);
    const[show3, setShow3] = useState(false);
    const[show4, setShow4] = useState(false);


    return <div>
        <div className="grid grid-flow-row grid-rows-2 bg-slate-800">
            
            <div className="grid grid-flow-col grid-cols-2">
                <button onClick={() => setShow1(true) & setShow2(false) & setShow3(false) & setShow4(false)} className=" w-full mx-auto bg-green-400 font-Monstserrat  text-white">
                    <div className="bg-slate-800 transition-all hover:opacity-90 duration-500">
                        <h3 className="p-8 hover:text-green-400 transition-colors duration-500 font-medium text-[1.5vw] font-Monstserrat text-white ">Forest</h3>
                    </div>
                </button>
                
                <button onClick={() => setShow2(true) & setShow1(false)& setShow3(false)&setShow4(false)} className=" w-full mx-auto bg-red-400 font-Monstserrat  text-white">
                <div className="bg-slate-800 transition-all hover:opacity-90 duration-500">
                        <h3 className="p-8 hover:text-red-400 transition-colors duration-500 font-medium text-[1.5vw] font-Monstserrat text-white ">Lava</h3>
                    </div>
                </button>
            </div>

            <div className="grid grid-flow-col grid-cols-2">
                <button onClick={() => setShow1(false) & setShow2(false) & setShow3(true) & setShow4(false)} className=" w-full mx-auto bg-yellow-400 font-Monstserrat  text-white">
                <div className="bg-slate-800 transition-all hover:opacity-90 duration-500">
                        <h3 className="p-8 hover:text-yellow-400 transition-colors duration-500 font-medium text-[1.5vw] font-Monstserrat text-white ">Desert</h3>
                    </div>
                </button>
                <button onClick={() => setShow1(false) & setShow2(false) & setShow3(false) & setShow4(true)} className=" w-full mx-auto bg-blue-400 font-Monstserrat  text-white">
                <div className="bg-slate-800 transition-all hover:opacity-90 duration-500">
                        <h3 className="p-8 hover:text-blue-400 transition-colors duration-500 font-medium text-[1.5vw] font-Monstserrat text-white ">Swamp</h3>
                    </div>
                </button>
            </div>

        </div>

        {show1 && 
                <Forest/>}
        {show2 && 
                <Lava/>}
                {show3 && 
                <Desert/>}
                {show4 && 
                <Swamp/>}
    </div>
}

export default Buttonsec;
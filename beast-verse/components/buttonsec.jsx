import React from "react";

function Buttonsec(props){
    return <div>
        <div className="grid grid-flow-row grid-rows-2 bg-slate-800">
            
            <div className="grid grid-flow-col grid-cols-2">
                <button className=" w-full mx-auto bg-green-400 font-Monstserrat  text-white">
                    <div className="bg-slate-800 p-8 transition-all hover:opacity-90 duration-500">
                        <h3 className="font-Monstserrat text-white ">Forest</h3>
                    </div>
                </button>
                <button className=" w-full mx-auto bg-red-400 font-Monstserrat  text-white">
                <div className="bg-slate-800 p-8 transition-all hover:opacity-90 duration-500">
                        <h3 className="text-white font-Monstserrat">Lava</h3>
                    </div>
                </button>
            </div>

            <div className="grid grid-flow-col grid-cols-2">
                <button className=" w-full mx-auto bg-yellow-400 font-Monstserrat  text-white">
                <div className="bg-slate-800 p-8 transition-all hover:opacity-90 duration-500">
                        <h3 className="text-white font-Monstserrat">Desert</h3>
                    </div>
                </button>
                <button className=" w-full mx-auto bg-blue-400 font-Monstserrat  text-white">
                <div className="bg-slate-800 p-8 transition-all hover:opacity-90 duration-500">
                        <h3 className="text-white font-Monstserrat">Swamp</h3>
                    </div>
                </button>
            </div>

        </div>
    </div>
}

export default Buttonsec;
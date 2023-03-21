import Roadmap23 from "./Roadmap23"
import Roadmap24 from "./Roadmap24"
import Roadmap25 from "./Roadmap25"
import Roadmap26 from "./Roadmap26"
import { useState } from "react";


function Roadmap(){

    const[view23, setView23] = useState(true);
    const[view24, setView24] = useState(false);
    const[view25, setView25] = useState(false);
    const[view26, setView26] = useState(false);

    

    return(<div className="bg-gradient-to-b from-slate-800 to to-slate-900">
            <h2 className="text-[4vw] text-blue-500 font-bold text-center font-Montserrat">ROADMAP</h2>

        <div className="grid grid-flow-col grid-cols-4 gap-5 w-[50%] ml-3 border-b-2 border-blue-400">
            <button autoFocus className="text-slate-700 font-Montserrat font-bold min-[1500px]:text-[3.5vw] text-[4vw] border-blue-400 focus:border-b-8 focus:text-blue-400 focus:outline-none" onClick={()=> setView23(true) & setView24(false) & setView25(false) & setView26(false)}>2023</button>
            <button className="text-slate-700 font-Montserrat font-bold min-[1500px]:text-[3.5vw] text-[4vw] border-blue-400 focus:border-b-8 focus:text-blue-400 focus:outline-none" onClick={()=> setView23(false) & setView24(true) & setView25(false) & setView26(false)}>2024</button>
            <button className="text-slate-700 font-Montserrat font-bold min-[1500px]:text-[3.5vw] text-[4vw] border-blue-400 focus:border-b-8 focus:text-blue-400 focus:outline-none" onClick={()=> setView23(false) & setView24(false) & setView25(true) & setView26(false)}>2025</button>
            <button className="text-slate-700 font-Montserrat font-bold min-[1500px]:text-[3.5vw] text-[4vw] border-blue-400 focus:border-b-8 focus:text-blue-400 focus:outline-none" onClick={()=> setView23(false) & setView24(false) & setView25(false) & setView26(true)}>2026</button>
        </div>
        {view23 && <Roadmap23/>}
        {view24 && <Roadmap24/>}
        {view25 && <Roadmap25/>}
        {view26 && <Roadmap26/>}
    </div>);
}

export default Roadmap;
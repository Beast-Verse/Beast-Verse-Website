import Mob2023 from "./Mob2023"
import Mob2024 from "./Mob2024"
import Mob2025 from "./Mob2025"
import Mob2026 from "./Mob2026"
import { useState } from "react";
function Mobroadmap() {
    const[view23, setView23] = useState(true);
    const[view24, setView24] = useState(false);
    const[view25, setView25] = useState(false);
    const[view26, setView26] = useState(false);

    const selected = 'border-blue-400 focus:border-b-8 focus:text-blue-400 border-b-8 text-blue-400'
    const notselected = 'text-slate-700'
  return (
    <div className="bg-gradient-to-b from-slate-800 to to-slate-900">
    <h2 className='text-[8vw] font-Montserrat text-blue-400 font-bold text-center'>ROADMAP</h2>

        <div className="grid grid-flow-col grid-cols-4 gap-5 w-fit ml-3 border-b-2 border-blue-400">
            <button className={`font-Montserrat font-bold min-[1500px]:text-[3.5vw] text-[5vw] ${view23?selected:notselected} focus:outline-none`} onClick={()=> setView23(true) & setView24(false) & setView25(false) & setView26(false)}>2023</button>
            <button className={`font-Montserrat font-bold min-[1500px]:text-[3.5vw] text-[5vw] ${view24?selected:notselected} border-blue-400 focus:border-b-8 focus:text-blue-400 focus:outline-none`} onClick={()=> setView23(false) & setView24(true) & setView25(false) & setView26(false)}>2024</button>
            <button className={`font-Montserrat font-bold min-[1500px]:text-[3.5vw] text-[5vw] ${view25?selected:notselected} border-blue-400 focus:border-b-8 focus:text-blue-400 focus:outline-none`} onClick={()=> setView23(false) & setView24(false) & setView25(true) & setView26(false)}>2025</button>
            <button className={`font-Montserrat font-bold min-[1500px]:text-[3.5vw] text-[5vw] ${view26?selected:notselected} border-blue-400 focus:border-b-8 focus:text-blue-400 focus:outline-none`} onClick={()=> setView23(false) & setView24(false) & setView25(false) & setView26(true)}>2026</button>
        </div>
        {view23 && <Mob2023/>}
        {view24 && <Mob2024/>}
        {view25 && <Mob2025/>}
        {view26 && <Mob2026/>}
    </div>
  )
}

export default Mobroadmap

import React from 'react'
import {motion} from "framer-motion"
function Mob2023() {
  return (
    <motion.div initial={{opacity:0.2}}
        whileInView={{opacity:1}} transition={{duration: 1}} className="grid grid-flow-row grid-rows-4 mt-5 gap-10">



            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl w-[90%] mx-auto shadow-blue-500/40 shadow-xl border-2 border-blue-500">
                <h3 className="text-blue-300 font-Montserrat font-bold text-[12vw] ml-5 mt-4">Q1</h3>
                <div className="w-[100%]">
                <p className="font-Montserrat text-[5vw] ml-7 font-semibold text-blue-400 mt-6">Community Building
                <ul className="list-disc mb-7">
                    <li className="text-[4vw] ml-[1.5vw] mb-5 mt-2 text-white">Announcement trailer and Teaser Release</li>
                    <li className="text-[4vw] ml-[1.5vw] mb-5 text-white">Setting up and managing necessary Socials</li>
                    <li className="text-[4vw] ml-[1.5vw] mb-5 text-white">Whitelist and Coupon Giveaways</li>
                    <li className="text-[4vw] ml-[1.5vw] mb-5 text-white">Building and Launching our Website</li>
                    </ul>
                </p>

                <p className="font-Montserrat text-[5vw] ml-7 font-semibold text-blue-400 mt-6">Cooking
                <ol className="list-disc">
                    <li className="text-[4vw] ml-[1.5vw] mt-2 mb-5 text-white">Setting up a Bulk Minting and Whitelisting System</li>
                    <li className="text-[4vw] ml-[1.5vw] mb-5 text-white">Creating the NFTs and deciding Total Supply</li>
                    
                    </ol>
                </p>
                </div>
            </div>



            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl w-[90%] mx-auto">
                <h3 className="text-blue-300 font-Montserrat font-bold text-[12vw] ml-5 mt-4">Q2</h3>
                <div className="w-[100%]">
                <p className="font-Montserrat text-[5vw] ml-7 font-semibold text-blue-400 mt-6">Community Enhancement
                <ul className="list-disc mb-7">
                    <li className="text-[4vw] ml-[1.5vw] mt-2 mb-5 text-white">Collaborating with similar projects and companies</li>
                    <li className="text-[4vw] ml-[1.5vw] mb-5 text-white">Hosting Twitter Spaces and Discord meets to connect with the Community </li>
                    </ul>
                </p>

                <p className="font-Montserrat text-[5vw]  ml-7 font-semibold text-blue-400 mt-6">NFT Launch
                <ol className="list-disc">
                    <li className="text-[4vw] ml-[1.5vw] mt-2 mb-5 text-white">Whitelist Launch</li>
                    <li className="text-[4vw] ml-[1.5vw] mb-5 text-white">General Public Launch in Weekly Phases</li>
                    <li className="text-[4vw] ml-[1.5vw] mb-5 text-white">Sharing the promised sales percentage with "Top Contributors"</li>
                    </ol>
                </p>
                </div>
            </div>



            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl w-[90%] mx-auto">
                <h3 className="text-blue-300 font-Montserrat font-bold text-[12vw] ml-5 mt-4">Q3</h3>
                <div className="w-[100%]">
                <p className="font-Montserrat text-[5vw] ml-7 font-semibold text-blue-400 mt-6">The Game
                <ul className="list-disc mb-7">
                    <li className="text-[4vw] ml-[1.5vw] mt-2 mb-5 text-white">Alpha and Beta Testing Phases with people from the Community </li>
                    </ul>
                </p>

                <p className="font-Montserrat text-[5vw] ml-7 font-semibold text-blue-400 mt-6">NFT Launch
                <ol className="list-disc">
                    <li className="text-[4vw] ml-[1.5vw] mt-2 mb-5 text-white">Developing an ERC20 token and finalising the Total Supply</li>
                    <li className="text-[4vw] ml-[1.5vw] mb-5 text-white">Listing the token on exchanges and moving towards IGO on Launchpads</li>
                    </ol>
                </p>
                </div>
            </div>



            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl w-[90%] mx-auto">
                <h3 className="text-blue-300 font-Montserrat font-bold text-[12vw] ml-5 mt-4">Q4</h3>
                <div className="w-[100%]">
                <p className="font-Montserrat text-[5vw] ml-7 font-semibold text-blue-400 mt-6">Game Launch
                <ul className="list-disc mb-7">
                    <li className="text-[4vw] ml-[1.5vw] mt-2 mb-5 text-white">Final testing and Launching the Beast Verse Game on our Website</li>
                    <li className="text-[4vw] ml-[1.5vw] mb-5 text-white">Patch Fixes for the Errors and Bugs if reported</li>
                    </ul>
                </p>
                </div>
            </div>

        </motion.div>
  )
}

export default Mob2023

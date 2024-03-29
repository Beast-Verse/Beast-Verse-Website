import React from 'react'
import mem1 from '../assets/team/risav.png'
import mem2 from '../assets/team/sayak.png'
import mem3 from '../assets/team/aritra.png'
import mem4 from '../assets/team/aiindrilla.jpeg'
import mem5 from '../assets/team/nilanjan.jpeg'
import mem6 from '../assets/team/sabuj.jpeg'
import mem7 from '../assets/team/soham.jpeg'
import mem8 from '../assets/team/rahul.jpeg'
import mem9 from '../assets/team/anus.jpeg'

import {motion} from "framer-motion"

function Mobteams() {
  const TeamData = [
    {
        name: "Risavdeb Patra",
        position: "Founder & Marketing",
        github: "https://github.com/Risav03",
        linkedin: "https://www.linkedin.com/in/risavdeb-patra-703971227/",
        twitter: "https://twitter.com/risavdebpatra",
        img: mem1
    },
    {
        name: "Sayak Sarkar",
        position: "Web Developer",
        github: "https://github.com/SayakSarkar02",
        linkedin: "https://www.linkedin.com/in/sayaksarkar02/",
        twitter: "https://twitter.com/SayakSa40091728",
        img: mem2
    },
    {
        name: "Aritra Roy",
        position: "Game Developer",
        github: "https://github.com/im-still-thinking",
        linkedin: "https://www.linkedin.com/in/aritra-roy-b88b421a5/",
        twitter: "https://twitter.com/AritraR2002",
        img: mem3
    },
    {
        name: "Aiindrila Kole",
        position: "Graphics & Content",
        github: "https://github.com/Aiindrila23",
        linkedin: "https://www.linkedin.com/in/aiindrila-kole-627b77227",
        twitter: "https://twitter.com/ItsMeAiindrila",
        img: mem4
    },
    {
      name: "Nilanjan Bhattacharya",
      position: "Backend Developer",
      github: "https://github.com/nbhattacharya08",
      linkedin: "https://linkedin.com/in/nilanjan-bhattacharya-139539229/",
      twitter: "https://twitter.com/nbhattacharya03",
      img: mem5
  },
    {
        name: "Sabuj Ghosh",
        position: "Game Developer",
        github: "https://github.com/Night3y3",
        linkedin: "https://www.linkedin.com/in/sabuj-ghosh-a43609214",
        twitter: "https://twitter.com/SabujGh55659975",
        img: mem6
    },
    {
        name: "Soham Sengupta",
        position: "Graphics & Content",
        github: "https://github.com/BlackDeath1107",
        linkedin: "https://www.linkedin.com/in/soham-sengupta-306103228",
        twitter: "https://twitter.com/sengupta_soham",
        img: mem7
    },
    {
        name: "Rahul Guha",
        position: "Backend Developer",
        github: "https://github.com/guha-rahul",
        linkedin: "https://www.linkedin.com/in/rahul-guha-93165220a/",
        twitter: "https://twitter.com/0xrguha",
        img: mem8
    },
    
  {
    name: "Anusmita Hait",
    position: "Web Developer",
    github: "https://github.com/anuHait",
    linkedin: "https://www.linkedin.com/in/anusmita-hait-b9552b226/",
    twitter: "https://twitter.com/anusmita_hait",
    img: mem9
},
    
    
]

return(
  <div id="Mobteams" class="bg-gradient-to-b from-slate-900 to to-black pt-10">
      <h2 className='text-[12vw] font-bold font-Montserrat text-blue-500 pt-20 text-center'>TEAM</h2>
    <motion.div initial={{opacity:0}}
    whileInView={{opacity:1}} transition={{duration: 2}} class=" px-6 py-40">

    <section class="flex justify-center">



    <div class=" font-Montserrat grid gap-x-6 gap-y-28 lg:gap-x-12 md:grid-cols-3 min-[1500px]:w-[60%] w-[70%]">


    
    {
        TeamData.map((member) => (
            <div class="mb-24 md:mb-0">
    <div class="rounded-xl shadow-xl shadow-slate-800 h-full block bg-gradient-to-bl from-[#070811] to-[#1c2c4e] border-x-4 border-blue-500 border-b-4 border-b-blue-500">
      <div class="flex justify-center">
        <div class="flex justify-center mt-[-100px] ">
          <img src={member.img} class="border-4 border-blue-500 rounded-full w-40 mt-8 mx-auto shadow-lg" alt="mem1"/>
        </div>
      </div>
      <div class="p-4 pb-6">
        <h5 class="text-[1rem] text-center text-blue-500 font-bold mb-2">{member.name}</h5>
        <p class="mb-6 text-center text-blue-300 text-[.85rem]">{member.position}</p>
        <ul class="list-inside flex mx-auto justify-center">
          <a href={member.github} target="_blank" rel="noreferrer" class="px-2">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 496 512" class="w-4 h-4 text-blue-100">
              <path fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a href={member.twitter} target="_blank" rel="noreferrer" class="px-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 text-blue-100">
              <path fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
          <a href={member.linkedin} target="_blank" rel="noreferrer" class="px-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-100">
              <path fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>
        </ul>
      </div>
    </div>
    </div>
        ))
    }

    
  
  </div>
  </section>
</motion.div>
</div> );

}

export default Mobteams

import React from 'react'
import beast from "../assets/beast.jpeg"
import Footer from './Footer'
function Mint() {
  const eggs=[
    {
      name:"hi1",
      image:beast,
      css:"bg-[#00BB02] text-[#93FF94] border-[#93FF94]"
    },
    {
      name:"hi2",
      image:beast,
      css:"bg-[#007DBB] text-[#93E5FF] border-[#93E5FF]"

    },
    {
      name:"hi3",
      image:beast,
      css:"bg-[#9124CB] text-[#E093FF] border-[#E093FF]"

    },
    {
      name:"hi4",
      image:beast,
      css:"bg-[#D8D600] text-[#FEFFB6] border-[#FEFFB6]"

    },

  ]
  return (
    <>

    <div className='bg-gradient-to-b from-black to-slate-800 text-center pb-28 h-full md:h-[100vh] gap-10'>
      <h1 className='pt-10 text-5xl font-bold text-blue-400 pb-20 lg:text-7xl'>MINT YOUR EGGS</h1>
      <div className='flex flex-col md:flex md:flex-row justify-center items-center mt-20 '>
      {
        eggs.map((egg)=>(
          <div className='flex flex-col m-10 justify-center items-center '>
          <img src={egg.image} className=' w-[28.5vh] rounded-lg md:w-[35.2vh] pb-8 dr'></img>
          <button className={`font-bold text-3xl text-slate-50 border-2 ${egg.css} rounded-xl p-3 w-[33vw] md:w-[11vw]`}>MINT</button>
          </div>
        ))
      }
      </div>
    </div>
   
    </>
    
  )
}

export default Mint

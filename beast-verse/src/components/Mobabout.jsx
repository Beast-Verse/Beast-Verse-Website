import React from 'react'

function Mobabout() {
  return (
    <div className='bg-gradient-to-br pt-3 from-slate-900 to-slate-800' id="Mobabout">
    <h2 className="text-4xl max-[640px]:text-3xl text-center font-Montserrat font-semibold text-white">
    What is <span className=" text-green-500">Beast Verse</span> ?
  </h2>
  <div className=' mx-auto text-center  flex flex-col items-center justify-center'>
  <div className="">
          <iframe
            className="rounded-xl shadow-xl shadow-blue-500/50  w-full h-full  mt-10"
            src="https://www.youtube.com/embed/AMt5x44k1FY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className='mt-5'>
        <p className="font-Montserrat  p-6 text-white">
            
        <b className="text-green-400">Beast Verse </b>is a <b className="text-green-400"> Play-to-earn PvP </b> NFT game,
        built on the <b className="text-purple-500"> Polygon Blockchain. </b> <br /> <br />
        We are creating a virtual world where players can explore different
        terrains, choose their favorite beasts and fight their way to
        victory. Our use of the Polygon Blockchain ensures that the game is
        <b className="text-green-400"> secure and transparent </b>, which is essential for players who value
        their personal information and assets. <br /><br ></br>
        So, jump into your <b className="text-green-400"> favorite terrain </b>, choose your <b className="text-green-400"> favorite beasts </b>,
        and fight your way through to become the <b className="text-green-400"> Mightiest of All Masters! </b>
        <br /> <br />
      </p>
        </div>
        <div className='mb-5' >
        <h2 className="text-3xl max-[640px]:text-2xl text-center font-Montserrat font-semibold text-white">
    See you in <span className=" text-green-500">Beast Verse!</span> 
  </h2>
        </div>
  </div>
    </div>
  )
}

export default Mobabout

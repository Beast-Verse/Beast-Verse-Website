import React from 'react'
import nftcal from '../assets/partners/nftcal.svg';

export default function Partners() {
  return (
    <div className='bg-black text-center py-20 px-40 pb-32 max-[740px]:px-10'>
        <h2 className='text-6xl font-bold font-Montserrat text-blue-500 pb-10 text-center max-[740px]:text-4xl'>PARTNERS</h2>
        <div className='flex flex-row items-start justify-center'>
            <div className=' flex flex-col items-center'>
                <div className='h-5 overflow-hidden'>
                <div className='bg-blue-500 relative top-0 left-0 w-10 h-10 rounded-full'></div>
                </div>
                <div className='p-10 pt-4 border border-t-4 border-blue-500 border-x-0 border-b-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-slate-900/70 flex flex-col items-center justify-center'>
                    <img src={nftcal} alt="nftcal" className='w-40'/>
                    <h3 className='text-white font-Montserrat text-2xl'>NFT Calendar</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export default function Success({code}) {
  return (
    <div className='bg-gradient-to-br from-black via-slate-900 to-blue-900 pb-20 h-[100vh]'>
        <Navbar delay={1}/>
        <div className='container mx-auto bg-blue-400/10 border-2 border-blue-400 rounded-xl pb-10 px-20 max-[740px]:px-5'>
              <h1 className='text-center font-bold text-blue-300 text-4xl my-10'>Successfully Registered</h1>
              <h1 className='text-center font-bold text-blue-300 text-4xl my-10'>{code}</h1>
        </div>
    </div>
  )
}

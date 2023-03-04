import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Landing from "../components/Landing"
import Navbar from "../components/Navbar"
import AboutUs from "../components/aboutus"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Beast Verse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=400, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ruslan+Display&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

      </Head>
      <div className=' bg-gradient-to-br from-blue-700 to-blue-500 h-[100vh] pt-5 max-[768px]:hidden'>
        <div className='container mx-auto'>
          <Navbar/>
          {/* <AboutUs/> */}
        </div>
        <div className='w-[100vw] overflow-x-hidden'>
          <Landing/>
        </div>
      </div>

      <div className='bg-gradient-to-br from-blue-700 to-blue-500 h-[100vh] pt-5 md:hidden'>
          <div className='container mx-auto text-center text-white font-semibold font-Monstserrat h-[80vh] flex flex-col items-center justify-center'>
            Not Available For Smart-Phones Yet!
          </div>
      </div>
    </>
  )
}

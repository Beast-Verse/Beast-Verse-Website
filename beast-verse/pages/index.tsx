import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Landing from "../components/Landing"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import AboutUs from "../components/aboutus"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Beast Verse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ruslan+Display&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

      </Head>
      <div className=' bg-gradient-to-b from-blue-800 to-blue-500 h-[120vh] w-full pt-5 overflow-x-clip'>
        <div className='container mx-auto'>
          <Navbar/>
          <Landing/>
          <AboutUs/>
        </div>
      </div>
    </>
  )
}

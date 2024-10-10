import React from 'react'
import { ReactTyped } from "react-typed";

const  Hero =() =>{
  return (
    <div className='text-white mt-10'>
        <div className='max-w-[800px] mt-[-96px] justify-center  font-bold flex flex-col w-full mx-auto h-screen text-center'>
            <p className='text-[#03deff] uppercase p-2'>Growing With Data Analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-2'>Grow With Data</h1>
            <div className='flex items-center justify-center'>
                <p className='md:text-5xl sm:text-4xl text-xl py-4'>Fast,Flexible,Financing For</p>
                <ReactTyped className='md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2'
                strings={[
                    "SASS",
                    "B2B",
                    "BTC",
                ]}
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            </div>
            <p className='text-gray-500 md:text-2xl text-xl'>Monitor your data analytics to increase revenue for BTB,BTC,&SASS platforms.</p>
            <button className='bg-[#03deff] mx-auto rounded-md text-black w-[200px]  my-6 py-3 text-sm'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
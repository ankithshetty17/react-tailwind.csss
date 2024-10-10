import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto'>
            <img src={laptop} className='w-[500px] mx-auto py-4' alt='#laptop'/>
            <div className='flex flex-col justify-center'>
                <p className='uppercase font-bold text-[#03deff]'>data analytics dashboard</p>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Manage Data Analytics</h1>
                <p className='font-bold text-sm text-gray-500'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                   The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                   as opposed to using 'Content here, content here.
                </p>
                <button className='text-[#03deff] mx-auto md:mx-0 rounded-md bg-black w-[200px]  my-6 py-3 text-sm'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
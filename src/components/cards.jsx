import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] bg-white px-8'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
            <div className='bg-gray-100 w-full flex flex-col shadow-xl rounded-lg hover:scale-105 duration-500 p-4 my-4'>
                <img className='w-20 mx-auto bg-transparent' src={single} alt="#image" />
                <h2 className='font-bold text-center py-4 text-2xl'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mt-2 mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mt-2 mx-8'>1 Granted User</p>
                    <p className='py-2  mt-2 mx-8'>Send Up To 2GB</p>
                </div>
                <button className='font-bold bg-[#03deff] mx-auto rounded-md text-black w-[200px]  my-6 py-3  text-sm'>Notify Me</button>
            </div>

            <div className='bg-gray-100 w-full flex flex-col shadow-xl rounded-lg hover:scale-105 duration-500 p-4 my-4'>
                <img className='w-20 mx-auto bg-transparent' src={double} alt="#image" />
                <h2 className='font-bold text-center py-4 text-2xl'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mt-2 mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mt-2 mx-8'>1 Granted User</p>
                    <p className='py-2  mt-2 mx-8'>Send Up To 2GB</p>
                </div>
                <button className='font-bold bg-[#03deff] mx-auto rounded-md text-black w-[200px]  my-6 py-3  text-sm'>Notify Me</button>
            </div>

            <div className=' bg-gray-100 w-full flex flex-col shadow-xl rounded-lg hover:scale-105 duration-500 p-4 my-4'>
                <img className='w-20 mx-auto bg-transparent' src={triple} alt="#image" />
                <h2 className='font-bold text-center py-4 text-2xl'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mt-2 mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mt-2 mx-8'>1 Granted User</p>
                    <p className='py-2  mt-2 mx-8'>Send Up To 2GB</p>
                </div>
                <button className='font-bold bg-[#03deff] mx-auto rounded-md text-black w-[200px]  my-6 py-3  text-sm'>Notify Me</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
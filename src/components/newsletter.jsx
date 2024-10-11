import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-12 px-4'>
        <div className='max-w-[1240px] grid lg:grid-cols-3 mx-auto'>
            <div className='lg:col-span-2 my-4'>
            <h1 className='text-white font-bold py-2 md:text-4xl sm:text-3xl text-2xl '>Want Tips And Tricks To Optimize Your Flow?</h1>
            <p className='text-white font-bold text-[13px]'>Sign Up to Our News Leter And stay Up To Date.</p>
        </div>
        <div className='my-2'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Your Email'/>
                <button className=' font-bold bg-[#03deff] mx-auto rounded-md text-black w-[200px]  my-6 py-3 sm:ml-4 text-sm'>Notify Me</button>
            </div>
            <p className='text-white text-sm font-bold'>We Care About Protection Of Your Data.Read <span className='text-[#03deff] text-sm underline'>Privacy Policy</span> </p>
        </div>
       </div>
    </div>
  )
}

export default Newsletter
import React from 'react'
import Navbar from '../Navbar'

export default function Header() {

  return (
    <div className='container mx-auto px-4 3xl:px-10'>
      <div className='flex justify-between items-center h-14 mt-10 pt-2.5 pb-2.5'>

        {/* logo */}
        <div className='flex h-9 justify-between items-center'>
          <div className='w-9 h-9 pr-5 mr-5 bg-[#000000] dark:bg-white rounded-full bg'></div>
          <div className='w-32 3xl:w-44 h-6 font-sans text-[#000000] dark:text-white 3xl:grow 3xl:text-4xl text-2xl font-bold'>Tail Talks</div>
        </div>
        {/* end logo */}

        <Navbar />

      </div>
    </div>
  )
}

import React from 'react'
import { arrowRight } from '../assets/icons'
const SuperQuality = () => {
  return (
    <section id='#about-us' className='flex justify-between items-center max-lg:flex-col gap-10 
    w-full max-container
    '>
      <div className="flex flex-1 flex-col">
      <p className="text-2xl font-montserrat text-coral-red font-semibold">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold   ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovative for
          your active life
        </p>

        <button className="bg-coral-red text-white font-medium w-48 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-normal rounded-full">
          Shop now
          <img className="ml-2 rounded-full w-5 h-5" src={arrowRight} alt="" />
        </button>
      </div>
      
    </section>
  )
}

export default SuperQuality

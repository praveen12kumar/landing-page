import React from 'react'
import { arrowRight } from '../assets/icons';
import { shoe8 } from '../assets/images';
const SuperQuality = () => {
  return (
    <section id='#about-us' className='flex justify-between items-center max-lg:flex-col gap-10 
    w-full max-container
    '>
      <div className="flex flex-1 flex-col">
     
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You {" "}
          <span className="text-coral-red ">Super</span>
          <br />
          
          <span className="text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your expericene, providing you with unmatched quality, innovation, and a touch of elegance
        </p>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-2 mb-8 sm:max-w-sm lg:max-w-lg'>Our dedication to deatil and excellence ensures your satisfaction</p>

        <button className="bg-coral-red text-white font-medium w-60 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-normal rounded-full">
          View Details
          <img className="ml-2 rounded-full w-5 h-5" src={arrowRight} alt="" />
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center object-contain">
        <img src={shoe8} alt="shoe" width={570} height={522} />
      </div>
      
    </section>
  )
}

export default SuperQuality

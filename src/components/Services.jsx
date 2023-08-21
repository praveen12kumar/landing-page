import React from 'react'
import {services} from "../constants/index";
const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-10 border-1 border-blue-700'>
      {
        services?.map((service)=>(
          <div key={service.label} className="flex flex-col items-start flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-lg shadow-lg px-10 py-16 ">
            <div className="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red">
            <img src={service.imgURL} alt="service url" width={24} height={24} />
            </div>
            <h2 className='text-2xl font-palanquin mt-2 mb-2 font-semibold leading-normal' >{service.label}</h2>
            <p className='break-words font-montserrat text-lg leading-normal'>{service.subtext}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Services

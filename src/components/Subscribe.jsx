import React from 'react'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-center items-center max-lg:flex-col gap-10' id='contact-us'>
      <h3 className='text-4xl font-bold font-palanquin leading-[68px] lg:max-w-md ' >Sign Up from <span className='text-coral-red'> Updates</span> & Newsletter </h3>

      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
        <button className="bg-coral-red text-white font-medium w-48 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-normal rounded-full">
          Sign Up
        </button>
        </div>
      </div>
    
    </section>
  )
}

export default Subscribe

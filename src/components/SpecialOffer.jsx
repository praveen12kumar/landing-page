import React from 'react'
import {arrowRight} from "../assets/icons";
import {offer} from "../assets/images"
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className="flex-1">
      <img src={offer} alt="" width={773} height={687} className='object-contain' />
   </div>
   <div className="flex flex-col flex-1 sm:px-12">
   <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg px-4">
       
       <span className="text-coral-red ">Special </span>
       <span className=" ">Offer</span>
     </h2>
     <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm lg:max-w-lg px-4">
      Embark on a shopping journey that redefnes your expreicence with unbeatable deals. From premier selections to incredible savings, We offer unparalled value that sets us apart.
     </p>
     <p className='font-montserrat text-slate-gray text-lg leading-8 mt-2 mb-8 sm:max-w-sm lg:max-w-lg px-4'>
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest exprectactions, Your Journet with us is nothing short of exceptional.
      </p>

     <div className="flex ">
        <button className="bg-coral-red text-white font-medium w-48 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-normal rounded-full">
          Shop now
          <img className="ml-1 rounded-full w-5 h-5" src={arrowRight} alt="" />
        </button>

        <button className="bg-white ml-4 border-slate-gray  text-slate-gray font-medium w-44 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-normal rounded-full">
          Shop now
        </button>
     </div>
    </div>      
    </section>
  )
}

export default SpecialOffer

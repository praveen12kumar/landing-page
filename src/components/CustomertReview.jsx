import React from 'react'
import {reviews} from "../constants/index";
import { star } from '../assets/icons';
const CustomertReview = () => {
  return (
    <section className='max-conatiner'>
      <h3 className='font-palanquin font-bold text-4xl text-center'>What Our {" "}
        <span className='text-coral-red font-montserrat'>Customers</span> Say?
      </h3>
      <p className='mt-4 info-text m-auto max-w-lg text-center'>
        Here Genuine stories from our satisfied customers about their expceptional expreicence with us.
      </p>
      <div className="mt-24 mx-auto flex flex-1 justify-evenly items-center max-md:flex-col gap-14">
        {
          reviews?.map((review) =>( 
            <div className="flex flex-1 flex-col items-center shadow-xl px-4 py-8 mb-16 rounded-lg" key={review.customerName}>
              <div className="rounded-full">
              <img src={review.imgURL} alt="url" width={120} height={120} className='object-contain rounded-full' />
              </div>
              <p className='text-lg mt-4 text-center text-slate-gray font-montserrat leading-normal'>{review.feedback}</p>
              
              <p className='flex items-center mt-2 text-xl font-montserrat font-medium'> <img src={star} alt="" width={18} height={18} /> 
                <span className='pl-1'>({review.rating})</span></p>
                <h2 className='text-2xl font-palanquin font-semibold leading-normal mt-2  '>{review.customerName}</h2>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default CustomertReview

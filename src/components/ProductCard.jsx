import React from 'react'
import {star} from "../assets/icons"

const ProductCard = ({product}) => {
    const {imgURL, name, price} = product;
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full mx-8'>
        <img src={imgURL} alt="url" className='w-[280px] h-[280px]' />
        <div className="mt-4 justify-start gap-2.5 flex">
            <img src={star} alt="" />
            <p className='font-montserrat text-slate-gray leading-normal text-xl'>(4.5)</p>
        </div>
        <h3 className='font-semibold text-xl font-palanquin leading-normal mt-2'>{name}</h3>
        <p className='text-coral-red font-semibold tracking-wide leading-normal text-lg '>{price}</p>
    </div>
  )
}

export default ProductCard

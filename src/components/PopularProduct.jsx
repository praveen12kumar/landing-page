import React from 'react';
import {products} from "../constants/index";
import ProductCard from './ProductCard';
const PopularProduct = () => {
  return (
    <section id='#products' className='max-container flex flex-col justify-center max-sm:mt:20  mt-40 ' >
        <div className="flex flex-col justify-start gap-5">
          <h2 className='text-4xl font-palanquin font-bold'>
            Our <span className='text-coral-red'>Products</span>
          </h2>
          <p className='lg:max-w-lg mt-12 font-montserrat text-slate-gray text-xl'>Expericene top-notch quality and style with our sought-after selections. Discover a world of confort, design, and value</p>
        </div>
        <div className="mt-16 grid mx-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
        sm:gap-4 gap-14
        ">
          {
            products.map((product)=>(
              <div className="" key={product}> 
                <ProductCard product={product}/>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default PopularProduct

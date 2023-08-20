import React, {useState} from "react";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "./ShoeCard";
const Hero = () => {
    const [bigShoe, setBigShoe] = useState(bigShoe1);
  return (
    <div className="w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container px-10">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
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

        <div className="flex gap-16 flex-wrap justify-start items-start w-full mt-20 ">
          {
            statistics.map((stat)=>(
              <div className="" key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="h-[700px]  relative flex flex-1 justify-center items-center xl:min-h-screen">
        <img src={bigShoe} alt="shoe collection" width={610} height={500} 
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[35%] lg:-bottom-[5%] sm:left-[10%] max-sm:px-6">
          {
            shoes.map((shoe)=>(
              <div className="" key={shoe}>
                <ShoeCard shoe={shoe} bigShoe={bigShoe} setBigShoe={setBigShoe}
                changeBigShoe={(shoe) => setBigShoe(shoe)}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;

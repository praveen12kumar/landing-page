import React from 'react'
import {Header} from '../components/Header';
import Hero from '../components/Hero';
import PopularProduct from '../components/PopularProduct';
import SuperQuality from '../components/SuperQuality';
import Services from '../components/Services';
import SpecialOffer from '../components/SpecialOffer';
import CustomertReview from '../components/CustomertReview';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='relative'>
      <Header/>
      <section className="xl:padding-1 wide:padding-r padding-l">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProduct/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding py-10 ">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="padding">
        <CustomertReview/>
      </section>
      <section className="padding">
        <Subscribe/>
      </section>
      <section className="padding bg-black">
        <Footer/>
      </section>
    </div>
  )
}

export default Home

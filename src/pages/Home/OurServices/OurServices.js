import React from 'react';
import fluoride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
import ServiceCart from './ServiceCart';
import Tertment from './Tretment/Tretment';

const OurServices = () => {
	const ourSevices = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description: "This is the most valueable teratment of the market.",
      icon: fluoride,
    },
    {
      id: 2,
      title: "Cavity Filling",
      description: "This is the most valueable teratment of the market.",
      icon: cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      description: "This is the most valueable teratment of the market.",
      icon: whitening,
    },
  ];

	return (
    <div className='mt-32'>
      <div className='text-center mb-16'>
        <h1 className='text-xl font-bold text-primary'>Our Services</h1>
        <p className='text-4xl text-accent'>Services We Provide</p>
      </div>
	  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6'>
		{
			ourSevices.map(service=><ServiceCart
				key={service.id}
				service={service}
			></ServiceCart>)
		}
	  </div>
	  <Tertment></Tertment>
    </div>
  );
};

export default OurServices;
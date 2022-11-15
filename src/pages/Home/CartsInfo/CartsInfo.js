import React from 'react';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"
import CartInfo from './CartInfo';

const CartsInfo = () => {
	const cartInfo = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Openign 9.00 am to 5pm",
      icon: clock,
      bgClass: "bg-primary",
    },
    {
      id: 2,
      title: "Visit our location",
      description: "Openign 9.00 am to 5pm",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      title: "Contact us",
      description: "Openign 9.00 am to 5pm",
      icon: phone,
      bgClass: "bg-primary",
    },
  ];

	return (
		<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6'>
			{
				cartInfo.map(cart => <CartInfo
					key={cart.id}
					cart={cart}
				></CartInfo>)
			}
		</div>
	);
};

export default CartsInfo;
import React from 'react';
import Banner from './Banner/Banner';
import CartsInfo from './CartsInfo/CartsInfo';
import ContactForm from './ContactForm/ContactForm';
import HomeTretment from './HomeTretment/HomeTretment';
import OurServices from './OurServices/OurServices';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<CartsInfo></CartsInfo>
			<OurServices></OurServices>
			<HomeTretment></HomeTretment>
			<Testimonial></Testimonial>
			<ContactForm></ContactForm>
		</div>
	);
};

export default Home;
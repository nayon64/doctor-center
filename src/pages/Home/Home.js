import React from 'react';
import Banner from './Banner/Banner';
import CartsInfo from './CartsInfo/CartsInfo';
import HomeTretment from './HomeTretment/HomeTretment';
import OurServices from './OurServices/OurServices';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<CartsInfo></CartsInfo>
			<OurServices></OurServices>
			<HomeTretment></HomeTretment>
		</div>
	);
};

export default Home;
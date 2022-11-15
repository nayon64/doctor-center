import React from 'react';
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from '../../../componets/PrimaryButton/PrimaryButton';

const Banner = () => {
	return (
    <div
      className="hero py-6 lg:py-48 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-content  flex-col lg:flex-row-reverse ">
        <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt="" />
        <div className='mt-10 lg:mt-0'>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Stared</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
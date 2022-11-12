import React from 'react';

const CartInfo = ({ cart }) => {
	const {title,description, bgClass, icon}=cart
	return (
    <div className={`card md:card-side shadow-xl text-white ${bgClass} px-6 py-8`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        
      </div>
    </div>
  );
};

export default CartInfo;
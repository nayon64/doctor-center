import React from "react";

const ReviewCart = ({ review }) => {
  const { name, location, img, review: userReview } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="flex items-center mt-5">
          <div className="avatar mr-5">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h5 className="text-xl font-semibold">{name}</h5>
            <p className="text-base">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;

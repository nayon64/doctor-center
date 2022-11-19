import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import ReviewCart from "./ReviewCart";

const Reviews = () => {
	const reviews = [
    {
      id: 1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      name: "Winson Herry",
      location: "California",
    },
    {
      id: 2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      name: "Winson Herry",
      location: "California",
    },
    {
      id: 3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      name: "Winson Herry",
      location: "California",
    },
  ];
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  md:px-4">
			{
				reviews.map(review => <ReviewCart
					key={review.id}
					review={review}
				></ReviewCart>)
			}

		</div>
	)
}
  
	

export default Reviews;

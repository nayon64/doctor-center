import React from "react";
import quote from "../../../assets/icons/quote.svg";
import Reviews from "./Reviews";

const Testimonial = () => {
  return (
    <section className="md:px-12 px-6 ">
      <div className="flex justify-between items-center my-16">
        <div>
          <h5 className="text-xl font-bold text-primary">Testimonial</h5>
          <p className="text-4xl font-normal">What Our Patients Says</p>
        </div>

        <figure>
          <img className="w-48" src={quote} alt="" />
        </figure>
      </div>
      <Reviews></Reviews>
    </section>
  );
};

export default Testimonial;

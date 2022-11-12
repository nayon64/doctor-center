import React from "react";
import tretment from "../../../../assets/images/treatment.png"

const Tertment = () => {
  return (
    <div className="hero my-36">
      <div className="hero-content grid md:grid-cols-2">
        <div className="flex justify-center">
          <img
            src={tretment}
            className="md:max-w-sm rounded-lg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktoppublishing
            packages and web page
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tertment;
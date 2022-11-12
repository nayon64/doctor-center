import React from "react";
import doctorSmall from "../../../assets/images/doctor-small.png"
import bg from "../../../assets/images/appointment.png"

const HomeTretment = () => {
  return (
    <div className="hero ">
      <div
        className="hero-content w-full grid md:grid-cols-2 p-0 gap-px" 
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="justify-center hidden md:block">
          <img src={doctorSmall} className="max-w-sm self-end" alt="" />
        </div>
			  <div className="text-white max-w-lg">
				  <p className="text-xl font-bold text-primary">Appointment</p>
          <h1 className="text-4xl mt-6 font-semibold">
            Make an appointment Today
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
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

export default HomeTretment;

import React from "react";
import bg from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../componets/PrimaryButton/PrimaryButton";

const HomeTretment = () => {
  return (
    <div className="hero ">
      <div
        className="hero-content w-full p-5 grid md:grid-cols-2 md:p-0 gap-px"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex justify-center">
          <img
            src={doctor}
            className=" hidden md:block -mt-36 h-full self-end"
            alt=""
          />
        </div>
        <div className="text-white max-w-lg ">
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
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HomeTretment;

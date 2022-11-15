import React from 'react';
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from '../../../componets/PrimaryButton/PrimaryButton';

const ContactForm = () => {
	return (
    <section className="mx-5 py-16 mt-36" style={{ backgroundImage: `url(${appointment})` }}>
      <div className='text-center'>
        <h5 className='font-bold text-xl text-primary'>Contact Us</h5>
        <p className='text-4xl text-white'>Stay connected with us</p>
      </div>
      <div className="card max-w-md mx-auto">
        <div className="card-body">
          <div className="form-control">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="SubJect"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea className="textarea" placeholder="Your Massage"></textarea>
          </div>
          <div className=" mt-6 text-center">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
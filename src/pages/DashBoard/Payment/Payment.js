import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheakOutForm from "./CheakOutForm";

const Payment = () => {
  const appointment = useLoaderData();
	console.log(appointment);
	
	const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
  return (
    <div>
      <h1>Please Payment</h1>
      <h3 className="text-secondary text-xl font-semibold">
        Hello, {appointment.name}
      </h3>
      <h3 className="text-2xl font-bold">
        Please pay for {appointment.tretmentName}
      </h3>
      <p>
        Your Appointment: {appointment.date} at {appointment.slot}
      </p>
      <h3 className="text-2xl font-bold">Please pay : ${appointment.price}</h3>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheakOutForm appointment={appointment}></CheakOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

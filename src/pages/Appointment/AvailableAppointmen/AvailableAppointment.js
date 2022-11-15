import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "../../../componets/AppointmentModal/AppointmentModal";
import AppointmentOption from "../AppointmentOption/AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [tretment, setTretment] = useState(null);
  console.log(appointmentOptions);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div>
      <p className="text-center text-xl text-primary my-16 ">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-6 gap-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTretment={setTretment}
          ></AppointmentOption>
        ))}
      </div>
      {tretment && (
        <AppointmentModal
          selectedDate={selectedDate}
          appointment={tretment}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointment;

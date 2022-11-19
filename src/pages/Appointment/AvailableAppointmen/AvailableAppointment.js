import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, {  useState } from "react";
import AppointmentModal from "../../../componets/AppointmentModal/AppointmentModal";
import AppointmentOption from "../AppointmentOption/AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [tretment, setTretment] = useState(null);

  const date= format(selectedDate,"PP")
  const { data: appointmentOptions = [], refetch } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  // loaded by query

  // const { data:appointmentOptions=[] } = useQuery({
  //   queryKey: ["appointmentOptions"],
  //   queryFn: () =>
  //     fetch("http://localhost:5000/appointmentOptions").then((res) =>
  //       res.json()
  //     ),
  // });

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);

  return (
    <div>
      <p className="text-center text-xl text-primary my-16 ">
        Available Appointments on {date}
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
          setTretment={setTretment}
          refetch={refetch}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointment;

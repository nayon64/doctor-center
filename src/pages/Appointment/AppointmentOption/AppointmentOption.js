const AppointmentOption = ({ appointmentOption, setTretment }) => {
  const { name, slots } = appointmentOption;
  console.log(appointmentOption);
  return (
    <div className="card  shadow-xl py-8">
      <div className="card-body text-center">
        <h2 className="text-center font-bold text-2xl text-secondary">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length > 0 ? slots.length : "No"}{" "}
          {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="appointment-modal"
            className="btn btn-primary text-white"
            onClick={() => setTretment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;

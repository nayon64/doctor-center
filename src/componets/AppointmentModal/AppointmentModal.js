import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AppointmentModal = ({
  appointment,
  selectedDate,
  setTretment,
  refetch,
}) => {
  const { name, slots } = appointment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const tretmentName = appointment.name;
    const date = form.date.value;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      tretmentName,
      date,
      slot,
      name,
      phone,
      email,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((result) => {
        console.log(result);
        toast.success("Succesfully get appointment");
        setTretment(null);
        refetch()
      })
      .catch((err) => console.log(err));
    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit} className="grid gap-3 mt-10">
            <input
              name="date"
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              name="name"
              className="input input-bordered w-full "
            />

            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              type="submit"
              className="btn btn-accent w-full"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
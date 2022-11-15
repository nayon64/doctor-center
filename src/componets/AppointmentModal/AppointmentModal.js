import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ appointment, selectedDate }) => {
	const { name,slots } = appointment;
  const date = format(selectedDate, "PP");
  
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const date = form.date.value;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    console.log(date,slot, name,phone,email)
  }
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
						  {slots.map((slot ,idx)=> <option key={idx} value={slot}>{slot}</option>
              )}
              
            </select>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name='phone'
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              name='email'
              type="email"
              placeholder="Email"
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
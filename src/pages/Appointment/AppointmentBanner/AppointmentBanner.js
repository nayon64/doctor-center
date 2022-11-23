import React from 'react';
import chaire from "../../../assets/images/chair.png"
import bg from "../../../assets/images/bg.png"
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ setSelectedData, selectedDate }) => {
  return (
    <header
      className="bg-cover bg-center bg-no-repeat md:py-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero">
        <div className="hero-content grid md:grid-cols-2 ">
          <div className="flex justify-center items-center order-2 pt-6 md:pt-0 md:order-1">
            <DayPicker
              mode="single"
              onSelect={(data) => {
                if (data) {
                  setSelectedData(data);
                }
              }}
              selected={selectedDate}
              // onSelect={setSelectedData}
            ></DayPicker>
          </div>
          <div className="order-1 md:order-2">
            <img alt="" src={chaire} className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
import React from "react";
import DashBoardTable from "../DashBoardTable/DashBoardTable";

const DashBoard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <div className="flex justify-between">
          <h1>MY Appointment</h1>
          <h1>Date</h1>
        </div>
      </div>
      <DashBoardTable></DashBoardTable>
    </div>
  );
};

export default DashBoard;

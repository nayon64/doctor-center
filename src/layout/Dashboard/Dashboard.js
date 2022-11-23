import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../api/useIsAdmin/useIsAdmin";
import ConfirmdModal from "../../componets/ConfirmdModal/ConfirmdModal";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [isAdmin]=useAdmin(user.email)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-gray-100 ">
          <Outlet></Outlet>
          {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer </label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageDoctor">Manage Doctor</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <ConfirmdModal></ConfirmdModal> */}
    </div>
  );
};

export default Dashboard;

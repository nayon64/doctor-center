import Home from "../../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Login from "../../pages/Login/Login";
import Contact from "../../pages/Contact/Contact";
import Register from "../../pages/Register/Register";
import Dashboard from "../../layout/Dashboard/Dashboard";
import DashBoard from "../../pages/DashBoard/DashBoard/DashBoard";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AllUsers from "../../pages/DashBoard/AllUsers/AllUsers";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
export default routers;
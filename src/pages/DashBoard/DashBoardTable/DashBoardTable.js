import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const DashBoardTable = () => {
  const { user } = useContext(AuthContext)
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const {data:bookings=[]} = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authraization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = res.json()
      return data;
    }
  });
console.log(bookings)
	return (
    <div className="overflow-x-auto  p-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Service</th>
            <th>Time</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{booking.name}</td>
              <td>{booking.tretmentName}</td>
              <td>{booking.slot}</td>
              <td>
                {booking.price && !booking.isPaid &&
                  <Link to={`/dashboard/payment/${booking._id}`}>
                    <button className="btn btn-primary">Pay</button>
                  </Link>
                }
              </td>
            </tr>
            // /dashboard/payment/:id
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoardTable;
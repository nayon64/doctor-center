import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
	const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/admin`, {
        headers: {
          authraization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

	const handelMakeAdmin = id => {
		fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authraization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
	}

console.log(allUsers)
	const handelUserDelete = id => {
		fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "DELETE",
      headers: {
        authraization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
	}

	return (
    <div className="overflow-x-auto  p-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th className="text-center">Admin</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((booking, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td className="text-center">
                { booking.role!=="Admin" &&
                  <button
                  onClick={() => handelMakeAdmin(booking._id)}
                  className="btn btn-primay"
                >
                  Admin
                </button>}
              </td>
              <td className="text-center">
                <button
                  onClick={() => handelUserDelete(booking._id)}
                  className="btn btn-secondary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
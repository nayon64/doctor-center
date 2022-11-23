import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmdModal from "../../../componets/ConfirmdModal/ConfirmdModal";

const ManageDoctors = () => {
  
  const [deleteDoctor, setDeleteDoctor] = useState(null)

  const { data: doctors = [] ,refetch,isLoading} = useQuery({
    queryKey: ["manageDoctor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addDoctor", {
        headers: {
          authraization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteDoctor = doctor => {
    console.log(doctor)
    fetch(`http://localhost:5000/doctors/${doctor._id}`,{
      method:"DELETE",
      headers: {
        authraization:`Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          toast.success(`${doctor.name} delete Successfully!!!`)
          refetch();
        } 
    })
  }

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>
      <h1>Show your Doctor list</h1>
      <div>
        <div className="overflow-x-auto p-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors &&
                doctors.map((doctor, id) => (
                  <tr key={doctor._id}>
                    <th>{id + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={doctor.image} alt="" />
                        </div>
                      </div>
                    </td>
                    <td>{doctor.name}</td>
                    <td>{doctor.specialty}</td>
                    <td>
                      {/* The button to open modal */}
                      <label
                        htmlFor="my-modal"
                        className="btn btn-errorbtn-error"
                        onClick={() => setDeleteDoctor(doctor)}
                      >
                        Delete
                      </label>
                      {/* <button className="btn btn-error">Delete</button> */}
                    </td>
                  </tr>
                ))}
              {/* <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      {deleteDoctor && (
        <ConfirmdModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deleteDoctor.name}. It cannot be undone.`}
          confirmdModal={handleDeleteDoctor}
          modalValue={deleteDoctor}
          cancleModal={setDeleteDoctor}
        ></ConfirmdModal>
      )}
    </div>
  );
};

export default ManageDoctors;

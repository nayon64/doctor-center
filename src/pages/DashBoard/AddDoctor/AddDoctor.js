import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddDoctor = () => {


	const { register, handleSubmit, formState: { errors } } = useForm()
	
	const imageHostKey = process.env.REACT_APP_imgbb_key;

	const handleAddDoctor = data => {
		console.log(data)
		const image=data.img[0]
		const formData = new FormData()
		formData.append("image", image)
		fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
			method: "POST",
			body:formData
		})
			.then(res => res.json())
      .then(imageData => {
        const doctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image: imageData.data.url
        };
        console.log(doctor)
        fetch("http://localhost:5000/addDoctor", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authraization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(doctor)
        })
          .then(res => res.json())
          .then(data => {
            if (data.acknowledged) {
              console.log(data);
              toast.success("Doctor Successfully Add");
            } 
        })
		})
	}

	const {data:specialts=[]}=useQuery({
		queryKey: ["specialty"],
		queryFn: async () => {
			const res= await fetch("http://localhost:5000/doctorSpecialty")
			const data = await res.json()
			return data;
		}
	})

	return (
    <div>
      <h1>Add doctor</h1>
      <div className="w-96 p-6 bg-white m-12 rounded-lg">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Enter your Full Name",
              })}
              className="input input-bordered w-full"
            />
          </div>
          {errors.name && (
            <p className="text-rose-500">{errors.name?.message}</p>
          )}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Enter your Email address",
              })}
              className="input input-bordered w-full"
            />
          </div>
          {errors.email && (
            <p className="text-rose-500">{errors.email?.message}</p>
          )}

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
            <select
              defaultValue={specialts[0]}
              {...register("specialty", {
                required: "Please select your specialty",
              })}
              className="select select-bordered w-full "
            >
              {specialts &&
                specialts.map((specialty) => (
                  <option key={specialty._id} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
            </select>
            {errors?.specialty && (
              <p className="text-rose-500">{errors?.specialty.message}</p>
            )}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Upload Your Photo</span>
              </label>
              <input
                type="file"
                {...register("img", {
                  required: "Enter your Email address",
                })}
                className="input input-bordered w-full"
              />
            </div>
            {/* <input
              type="password"
              {...register("password", {
                required: "Enter your password",
                maxLength: { value: 6, message: "Please Enter 6 charecter." },
              })}
              className="input input-bordered w-full"
            /> */}
          </div>
          {errors.password && (
            <p className="text-rose-500">{errors.password?.message}</p>
          )}
          <input
            className="btn btn-accent w-full mt-5"
            type="submit"
            value="Add a Doctor"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
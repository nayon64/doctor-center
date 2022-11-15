import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
	const { register,formState:{errors}, handleSubmit  } = useForm();
	const onSubmit = data => {
		console.log(data)
	}
	return (
    <div className="w-96 mx-auto border p-4 rounded-xl shadow-xl border-none">
      <h1 className="text-center text-xl text-accent">Register Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {errors.name && <p className="text-rose-500">{errors.name?.message}</p>}
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
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Enter your password",
              pattern: [
                { value: /[A-Z]/, message: "Please Enter one uppercase" },
                { value: /[a-z]/, message: "Please Enter one lowercase" },
                { value: /[0-9]/, message: "Please Enter one number" },
                { value: /[!#$%&?@]/, message: "Please Enter one number" },
              ],
              // maxLength: { value: 6, message: "Please Enter 6 charecter." },
            })}
            className="input input-bordered w-full"
          />
        </div>
        {errors.password && (
          <p className="text-rose-500">{errors.password?.message}</p>
        )}
        <input
          className="btn btn-accent w-full mt-5"
          type="submit"
          value="Register"
        />
      </form>
      <p className="mt-3">
        All ready have an account{" "}
        <Link className="text-secondary" to="/login">
          Log in
        </Link>
      </p>
      <button className="btn btn-outline btn-accent w-full mt-3">
        Countinue With Google
      </button>
    </div>
  );
};

export default Register;
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register,formState:{errors}, handleSubmit } = useForm();
  // const [data,setData]=useState("")
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-96 mx-auto border p-4 rounded-xl shadow-xl border-none">
      <h2 className="text-center text-xl text-accent">Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required:"Please enter your email"
            })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password")}
            className="input input-bordered w-full"
            required
          />
         
          <label className="label">
            <span className="label-text-alt">Forget Password?</span>
          </label>
        </div>
        <input
          className="btn btn-accent w-full mt-5"
          type="submit"
          value="Login"
        />
      </form>
      <p className="mt-3">
        New to Doctors Portal?{" "}
        <Link className="text-secondary" to="/register">
          Create new account
        </Link>
      </p>
      <button className="btn btn-outline btn-accent w-full mt-3">
        Countinue With Google
      </button>
    </div>
  );
};

export default Login;

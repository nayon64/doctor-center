import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CreateJwtToken from '../../api/CreateJwtToken/CreateJwtToken';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [createError, setCreateError] = useState("")
  const [createUserEmail, setCreateUserEamil] = useState("")
  const [token] = CreateJwtToken(createUserEmail)
  
  const navigate =useNavigate()

  // if (token) {
  //   navigate("/")
  // }
  
  const { singUp, profileUpdate } = useContext(AuthContext);

	const onSubmit = data => {
    console.log(data)
    singUp(data.email, data.password)
      .then(result => {
        profileUpdate({ displayName: data.name }).then(result => {
          createUser(data.name, data.email)
          setCreateUserEamil(data.email);
          setCreateError("");
          toast.success("Successfully Create an Account");
        })
        .catch(err=>console.log(err))
        
      })
      .catch(err => {
        setCreateError(err.message)
        console.log(err)
      })
  }
  
  const createUser =  (name, email) => {
    
    const userInfo = {
      name:name, email:email
    }
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then(res => res.json())
      .then(data => {
      console.log(data)
    })
  
  }


	return (
    <div className="w-96 mx-auto border p-4 rounded-xl shadow-xl border-none">
      <h1 className="text-center text-xl text-accent">Register Form</h1>
      {token&&<Navigate to="/"  replace></Navigate>}
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
        {createError && <p className="text-rose-500">{createError}</p>}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Enter your password",
              maxLength: { value: 6, message: "Please Enter 6 charecter." },
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
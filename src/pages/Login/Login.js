import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CreateJwtToken from "../../api/CreateJwtToken/CreateJwtToken";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { register, formState: { errors },reset, handleSubmit } = useForm();
  const [logInError,setLogInError]=useState('')
  const { logIn, providerLogIn } = useContext(AuthContext);
  const [userEmail,setUserEmail]=useState("")

  const [token] = CreateJwtToken(userEmail)
  const navigate = useNavigate()
  const location =useLocation()
  const from = location.state?.from?.pathname || "/"
  
  if (token) {
    navigate(from, {replace:true})
  }
  const goolgeProvider=new GoogleAuthProvider()


  // const [data,setData]=useState("")
  const onSubmit = (data) => {
    console.log(data);
    setLogInError("")
    logIn(data.email, data.password)
      .then((result) => {
        toast.success("Login Successfull")
        // CreateJwtToken(result.user.email)
        setUserEmail(result.user.email)
          reset()
        })
        .catch((err) => {
          setLogInError(err.message);
          console.log(err);
        });
  };

  // google provider login 
  const googleProviderLogin = () => {
    providerLogIn(goolgeProvider)
      .then(result => {
        console.log(result.user)
        toast.success("Google Login Successfull")
      })
    .catch(err=>console.log(err))
  }
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
              required: "Please enter your email",
            })}
            className="input input-bordered w-full"
          />
        </div>
        {errors.email && (
          <p className="text-rose-500">{errors.email?.message}</p>
        )}
        {logInError && (
          <p className="text-rose-500">
            {logInError === "Firebase: Error (auth/user-not-found)."
              ? "Your email are not valid"
              : ""}
          </p>
        )}
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
        {logInError && (
          <p className="text-rose-500">
            {logInError === "Firebase: Error (auth/wrong-password)."
              ? "Your password are not currect!"
              : ""}
          </p>
        )}
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
      <button
        onClick={googleProviderLogin}
        className="btn btn-outline btn-accent w-full mt-3"
      >
        Countinue With Google
      </button>
    </div>
  );
};

export default Login;

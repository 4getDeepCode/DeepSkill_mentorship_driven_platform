import auth from "@/aipManager/auth";
import { setToken } from "@/helper";
import useUserStore from "@/store/user";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useUserStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    try {
      const response = await auth.signin(data);

      if (response.data.success) {

        setToken(response.data.token.access.token);
        useUserStore.getState().setUser(response.data.user);
        navigate("/");
        toast.success("Login successfully!");
      }

      //   const response = await auth.signin(data);
      //   console.log("LOGIN RESPONSE:", response.data);
      //   reset();
      //   setUser(response.data.user);
      //  setToken(response.data.token.access.token);
      //   useUserStore.getState().setUser(response.data.user);
      //   navigate("/");
      //   toast.success("Login successfully!");
    } catch (e) {
      console.log(e);
      toast.error("Login failed! Please check your credentials");
    }
    setIsLoading(false);
  });
  return (
    <div
      className="min-h-screen flex items-center justify-center
bg-gradient-to-b from-green-950 via-green-900 to-green-950
relative overflow-hidden px-6"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

      <div
        className="relative z-10 w-full max-w-lg p-8 rounded-2xl
    bg-green-900/40 backdrop-blur-xl
    border border-yellow-400/20
    shadow-[0_0_40px_rgba(0,0,0,0.4)]"
      >
        {/* Heading */}
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold
        bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
        bg-clip-text text-transparent"
          >
            Welcome Back
          </h1>
          <p className="mt-2 text-yellow-200/80">
            Sign in to access your account
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full px-4 py-3 rounded-xl
          bg-green-950/60 text-yellow-100 placeholder-yellow-200/50
          border ${errors.email ? "border-red-500" : "border-yellow-400/20"}
          focus:outline-none focus:ring-2 focus:ring-yellow-400/60
          transition`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className={`w-full px-4 py-3 rounded-xl
          bg-green-950/60 text-yellow-100 placeholder-yellow-200/50
          border ${errors.password ? "border-red-500" : "border-yellow-400/20"}
          focus:outline-none focus:ring-2 focus:ring-yellow-400/60
          transition`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            disabled={isLoading}
            className="w-full py-3 text-lg font-semibold rounded-full
        text-green-950
        bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
        transition-all duration-300
        hover:from-yellow-300 hover:to-lime-500
        hover:shadow-[0_0_25px_rgba(250,204,21,0.8)]
        hover:-translate-y-1
        disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>

        {/* Footer Links */}
        <p className="mt-6 text-sm text-center text-yellow-200/80">
          Don't have an account yet?{" "}
          <NavLink
            to="/signup/student"
            className="font-semibold text-yellow-400 hover:text-lime-400 transition"
          >
            Sign up
          </NavLink>
          .
        </p>

        <p className="mt-3 text-sm text-center text-yellow-200/80">
          Become a{" "}
          <NavLink
            to="/signup/mentor"
            className="font-semibold text-yellow-400 hover:text-lime-400 transition"
          >
            Mentor
          </NavLink>{" "}
          with us.
        </p>
      </div>
    </div>
  );
};

export default Signin;

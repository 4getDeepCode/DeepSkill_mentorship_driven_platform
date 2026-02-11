import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import auth from "../aipManager/auth";

const Signup = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const heading =
    role === "mentor" ? "Sign Up as Mentor" : "Sign Up as Student";
  const onSubmit = async (data) => {
    setIsLoading(true);

    const formData = {
      ...data,
      role,
    };
    console.log(formData);

    try {
      const response = await auth.signup(formData);
      console.log("response", response.data.message);

      reset();
      toast.success("Account created successfully");
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  const normalFunction = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-950 via-green-900 to-green-950 relative overflow-hidden px-6">
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-lg p-8 rounded-2xl bg-green-900/40 backdrop-blur-xl border border-yellow-400/20 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400 bg-clip-text text-transparent">
              {heading}
            </h1>
            <p className="mt-2 text-yellow-200/80">
              Sign up to create your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            {/* Input Style Shared */}
            {[
              { name: "name", type: "text", placeholder: "Your Name" },
              { name: "email", type: "email", placeholder: "Email Address" },
              { name: "username", type: "text", placeholder: "Username" },
              { name: "password", type: "password", placeholder: "Password" },
            ].map((field) => (
              <div key={field.name}>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className={`w-full px-4 py-3 rounded-xl bg-green-950/60 text-yellow-100 placeholder-yellow-200/50  border ${
                    errors[field.name]
                      ? "border-red-500"
                      : "border-yellow-400/20"
                  } focus:outline-none focus:ring-2 focus:ring-yellow-400/60 transition`}
                  {...register(field.name, {
                    required: `${field.placeholder} is required`,
                  })}
                />
                {errors[field.name] && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors[field.name].message}
                  </p>
                )}
              </div>
            ))}

            {/* Submit Button */}
            <button
              disabled={isLoading}
              className="w-full py-3 text-lg font-semibold rounded-full text-green-950 bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400 transition-all duration-300 hover:from-yellow-300 hover:to-lime-500 hover:shadow-[0_0_25px_rgba(250,204,21,0.8)]     hover:-translate-y-1  disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-sm text-center text-yellow-200/80">
            Already have an account?{" "}
            <NavLink
              to="/signin"
              className="font-semibold text-yellow-400 hover:text-lime-400 transition"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;

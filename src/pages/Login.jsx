import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogin } from "../context/LoginProvider";

export default function Login() {
  const [login, setLogin] = useLogin();
  const [navigatetion, setNavigatetion] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(import.meta.env.VITE_SOME_KEY)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset validation errors on input change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      return;
    }

    // All validations passed, proceed with form submission
    // console.log(formData);

    axios({
      method: "post",
      url: `http://localhost:8080/api/v1/login`,
      data: formData,
    })
      .then((res) => {
        // console.log("Response:", res);
        toast.success("Login Successfully!");

        setLogin(res.data);
        setTimeout(() => {
          handleNavigate();
        }, 1000);
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data?.message);
          return;
        }

        // toast.error(error.message);
        console.error("Error:", error);
      });

    // Add any further logic here, such as sending the data to a server
  }

  const state = location.state;
  const fromPathname = state?.from || "";
  // console.log(fromPathname);

  // getting the state which is comming from private route

  const handleNavigate = () => {
    navigate(`/${fromPathname}`);
  };
  const handleNavigateHome = () => {
    navigate(`/`);
  };

  return (
    <section className=" flex min-h-screen">
      <button
        className=" absolute top-8 group  left-8  flex items-center gap-2 hover:text-blue-500 transition-all h-fit"
        onClick={handleNavigateHome}
        // onClick={() => navigate(-1)}
      >
        <FaArrowLeftLong className="group-hover:translate-x-[-8px] transition-all " />
        Back to Home
      </button>
      <div
        className="max-sm:w-full sm:min-w-[400px] sm:shadow-[0_0_2px_#000]  m-auto   min-h-full  flex-col  px-6 py-12 lg:px-8"
        // style={{
        //   boxShadow: "0 0 2px #000",
        // }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16  w-auto"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="mt-2 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="mt-2 text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
              <button
                className="text-blue-600 mt-2 group "
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Go to Sign up{" "}
                <FaArrowRightLong className="inline-flex ml-1 group-hover:translate-x-3 transition-all" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { confirmPassword, ...data } = formData;

    console.log(data);
    axios({
      method: "post",
      url: "",

      data: formData,
    })
      .then((res) => {
        console.log("data sent", res);
      })
      .catch((err) => {
        console.log("Error", err);
      });

    // setFormData({
    //   fullName: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });

    // Add any further logic here, such as sending the data to a server
  }

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <section className=" flex min-h-screen">
      <button
        className=" absolute top-4 md:top-8 group  left-8  flex items-center gap-2 hover:text-blue-500 transition-all h-fit"
        onClick={() => {
          navigate("/");
        }}
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
            Sign in to your account
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
                htmlFor="fullName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2 ">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className=" px-3  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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
                <div className="text-sm"></div>
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
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
              <button
                className="text-blue-600 mt-2 group "
                onClick={() => {
                  navigate("/login");
                }}
              >
                Go to login{" "}
                <FaArrowRightLong className="inline-flex ml-1 group-hover:translate-x-3 transition-all" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
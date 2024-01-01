import React, { useEffect, useState } from "react";
import { FaClinicMedical } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import { useDoctor } from "../context/DoctorProvider";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginProvider";
import { toast } from "react-toastify";
import axios from "axios";
import Layout from "../Layout/Layout";

const Summery = () => {
  const navigate = useNavigate();
  const [doctor] = useDoctor();
  const [login, setLogin] = useLogin(); // Changed to array destructuring
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    gender: "",
    phoneNo: "",
  });

  const handleInputChange = (e) => {
    setPatientData({
      ...patientData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    console.log(login.tokenObject);
    const appointmentData = {
      userId: login.tokenObject._id,
      doctor,
      patientData,
    };
    console.log("Appointment Data:", appointmentData);

    axios({
      method: "post",
      url: `http://localhost:3001/api/v1/appointment`,
      data: appointmentData,
    })
      .then((res) => {
        console.log("Response:", res.data);
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (doctor.length === 0) {
      navigate(-1);
    }
  }, [doctor, navigate]);
  return (
    <Layout>
      <section>
        <div className="mx-auto  max-w-screen-lg p-10 border-2 ">
          <div className="  flex items-center gap-6">
            <div>
              <img
                className="w-[80px] md:w-[100px]"
                src="https://www.leadsindiajh.org/wp-content/uploads/2019/06/health.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[18px] md:text-2xl font-bold font-serif">
                {doctor?.dr_data?.name}
              </h1>
              <p className="text-[14px]">{doctor?.dr_data?.specialization}</p>
              <button className="mt-2 text-[13px] border border-blue-500 py-1 px-2 font-bold text-blue-500 hover:underline transition-all">
                VIEW PROFILE
              </button>
            </div>
          </div>
          <hr className="mt-8" />
          <h2 className="text-lg font-semibold mt-8 ">Appointment Summary</h2>
          <div className="py-10 flex max-sm:flex-col justify-between">
            <div className="flex gap-4">
              <FaClinicMedical className="text-2xl text-green-500" />
              <div className="">
                <h1 className="text-xl font-bold font-serif">
                  In-Clinic Consultation
                </h1>
                <p className="text-[14px] font-semibold text-green-500">
                  Fees approx ₹ 500
                </p>
                <p className="text-purple-500 text-[12px] font-semibold">
                  (pay at clinic)
                </p>
              </div>
            </div>
            <div className=" max-md:my-8">
              <div className="flex gap-2 items-center">
                <IoMdTime className="text-2xl text-green-500" />
                <p>{doctor?.app_time}</p>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <BsCalendar2Date className="text-2xl text-green-500" />
                <p>{doctor?.app_date}</p>
              </div>
            </div>
            <button
              className="underline text-green-500 font-semibold"
              onClick={() => {
                navigate(-1);
              }}
            >
              Change Date & Time
            </button>
          </div>

          <hr className="mt-8" />
          <h2 className="text-lg font-semibold mt-8 font-serif underline ">
            Patient Deatils
          </h2>
          <form
            className="grid-cols-2 grid gap-4 mt-10"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={patientData.name}
                  onChange={handleInputChange}
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="text"
                  value={patientData.age}
                  onChange={handleInputChange}
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <input
                  id="gender"
                  name="gender"
                  type="text"
                  value={patientData.gender}
                  onChange={handleInputChange}
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phoneNo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone no
              </label>
              <div className="mt-2">
                <input
                  id="phoneNo"
                  name="phoneNo"
                  type="tel"
                  value={patientData.phoneNo}
                  onChange={handleInputChange}
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </form>
          <button
            className="text-white rounded hover:bg-slate-300 transition-colors px-16 mt-12 ml-auto mr-auto sm:mr-0 block py-3 bg-green-600 text-lg font-semibold"
            onClick={handleContinue}
          >
            continue
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Summery;

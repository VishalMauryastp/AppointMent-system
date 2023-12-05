import React from "react";
import Hero from "../components/main/Hero";
import { useLocation, useNavigate } from "react-router-dom";
import { FaClinicMedical } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import { useDoctor } from "../context/DoctorProvider";

const Summery = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useDoctor();

  return (
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
      </div>
    </section>
  );
};

export default Summery;

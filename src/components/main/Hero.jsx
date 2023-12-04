import React from "react";
import { FaClinicMedical } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";

const Hero = ({data}) => {
  return (
    <>
      <div className="">
        <div className="  flex items-center gap-6">
          <div>
            <img
              className="w-[80px] md:w-[100px]"
              src="https://www.leadsindiajh.org/wp-content/uploads/2019/06/health.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-[20px] md:text-2xl font-bold font-serif">{data.name}</h1>
            <p className="text-[14px]">{data.specialization}</p>
            <button className="mt-2 text-[13px] border border-blue-500 py-1 px-2 font-bold text-blue-500 hover:underline transition-all">
              VIEW PROFILE
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-8" />

      <div className="py-8  flex  max-md:flex-col justify-between md:items-center max-md:gap-8">
        <div className="">
          <h1 className="text-2xl font-bold font-serif">Book Appointment</h1>
          <p className="text-[14px] font-semibold">
            Select Your Consultation Type
          </p>
          <p className="text-[14px] font-semibold text-green-500">
            Fees approx ₹ 500
          </p>
          <p className="text-purple-500 text-[12px] font-semibold">
            (pay at clinic)
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 text-center gap-4 max-md:text-[12px]">
            <button className="p-4 bg-green-600 text-white rounded-[8px] ">
              <FaClinicMedical className="mx-auto text-2xl" />
              <p className="mt-2 t">In-clinic</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-[8px]">
              <FaPhoneAlt className="mx-auto text-2xl" />
              <p className="mt-2 t">Audio</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-[8px]">
              <IoMdVideocam className="mx-auto text-2xl" />
              <p className="mt-2 t">Video</p>
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-8">
        <h1 className="text-2xl font-bold font-serif">Clinic Name</h1>
        <div className="mt-3 flex items-center">
          {/* <input name="clinic" type="checkbox" /> */}
          <input type="radio" name="clinic" id="clinic" />
          <label htmlFor="clinic" className="ml-2">
            Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal
            Nagar, Maharashtra, 421302
          </label>
        </div>
      </div>
    </>
  );
};

export default Hero;

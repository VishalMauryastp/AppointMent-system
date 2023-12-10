import React, { useEffect, useState } from "react";
import { useLogin } from "../context/LoginProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [login, setLogin] = useLogin();
  const { jwtToken, tokenObject } = login;
  // const { email, fullName } = tokenObject;
  // console.log(tokenObject)

  const handleLogOut = () => {
    toast.success("Log out successfully!");
    setTimeout(() => {
      setLogin("");
    }, 1000);
  };
  const handleLogIn = () => {
    navigate("/login");
  };

  const navLinks = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Book Appointment",
      to: "#",
    },
    {
        title: "Appointment Status",
        to: "/status",
      },
   
   
    {
      title: "Contact Us",
      to: "/contact-us",
    },
  ];

  const handleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className=" bg-gray-200 py-4 sm:py-4 ">
      <div className="flex  justify-between items-center w-[90%] xl:max-w-screen-xl mx-auto ">
        <div>
          <img
            className=" h-[50px] mix-blend-multiply"
            src="/logo.png"
            alt="loading..."
          />
        </div>

        {/* desktop nav */}

        <div className=" max-md:hidden min-w-[70%] lg:min-w-[50%] items-center  flex justify-between">
          {navLinks.map((val, i) => {
            return (
              <NavLink
                className={`transition-all text-[18px] font-semibold hover:text-blue-500`}
                key={i}
                to={val.to}
              >
                {val.title}
              </NavLink>
            );
          })}
        </div>
        <div className="flex gap-2">
          <CgProfile
            className=" peer cursor-pointer text-4xl hover:text-blue-500 transition-all"
            onClick={() => {
              setMenu(false);
            }}
          />
          <div
            id="myAccount"
            className={`z-[20] mt-9  grid   grid-rows-[0fr] peer-hover:grid-rows-[1fr] transition-all absolute max-md:w-full md:min-w-[300px] right-0 `}
            onMouseEnter={() => {
              document
                .querySelector("#myAccount")
                .classList.add("grid-rows-[1fr]");
            }}
            onMouseLeave={() => {
              document
                .querySelector("#myAccount")
                .classList.remove("grid-rows-[1fr]");
            }}
          >
            <div className="overflow-hidden   ">
              <div className=" mt-6 bg-white border-2  px-8 py-4">
                <div className="flex items-center gap-2">
                  <CgProfile className=" peer cursor-pointer text-4xl hover:text-blue-500 transition-all" />
                  <div className="">
                    <h1 className="text-2xl">
                      {jwtToken ? tokenObject?.fullName : "User"}
                    </h1>
                    <p className="">{jwtToken ? tokenObject?.email : null}</p>
                  </div>
                </div>
                <button
                  className="w-full bg-gray-600/70 hover:bg-blue-500 rounded text-white font-bold mt-2 py-1"
                  onClick={jwtToken ? handleLogOut : handleLogIn}
                >
                  {jwtToken ? "Log out " : "Log in"}
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden cursor-pointer text-4xl hover:text-blue-500 transition-all">
            {!menu ? (
              <RiMenu4Line onClick={handleMobileMenu} />
            ) : (
              <IoClose onClick={handleMobileMenu} />
            )}
          </div>
        </div>

        {/* mobile Nav */}
      </div>
      <div
        className={`md:hidden  shadow-[0_0_2px_#000] z-[20] absolute w-full mt-4 grid  transition-all ${
          menu ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col w-full px-8 py-8 backdrop-blur-[4px] bg-white">
            {navLinks.map((val, i) => {
              return (
                <NavLink
                  className={`py-2 transition-all text-[20px] font-semibold hover:text-blue-500`}
                  key={i}
                  to={val.to}
                >
                  {val.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

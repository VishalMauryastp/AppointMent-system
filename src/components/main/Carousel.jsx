import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../../context/DoctorProvider";

const Carousel = ({ data }) => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useDoctor();
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedDate, setSelecteDate] = useState(doctor?.app_date || null);
  const [selectedTime, setselectedTime] = useState(doctor?.app_time || null);

  const completeData = {
    dr_data: data,
    app_time: selectedTime,
    app_date: selectedDate,
  };
  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  // Function to get future days in the current month excluding today and past dates
  const getFutureDaysInMonth = (year, month, day) => {
    const today = new Date(year, month, day);
    const lastDay = new Date(year, month + 1, 0);

    const days = [];
    for (let i = day; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      if (date >= today) {
        days.push(date);
      }
    }
    return days;
  };

  // Generate an array of future days in the current month
  const futureDaysInMonth = getFutureDaysInMonth(
    currentYear,
    currentMonth,
    currentDay
  );

  const dateInEN_GB = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  const handleButtonClick = (date, index) => {
    setSelectedButton(dateInEN_GB(date));
    const formattedDate = dateInEN_GB(date);
    setSelecteDate(formattedDate);
    // console.log("Clicked date:", formattedDate);
  };

  const timeSlots = [
    { id: 1, time: "10:00 AM" },
    { id: 2, time: "10:15 AM" },
    { id: 3, time: "10:30 AM" },
    { id: 4, time: "10:45 AM" },
    { id: 5, time: "11:00 AM" },
    { id: 6, time: "11:15 AM" },
    { id: 7, time: "11:30 AM" },
    { id: 8, time: "11:45 AM" },
  ];

  const TimeSlots = ({ timeSlots }) => {
    const handleButtonClick = (selectedTime) => {
      setselectedTime(selectedTime);
      // console.log("Clicked time:", selectedTime);
    };

    return (
      <div className=" grid grid-cols-3 gap-3 text-center">
        {timeSlots.map((time, index) => {
          return (
            <button
              className={`w-full py-1 rounded border-2 sm:text-base text-sm
                 ${
                   (selectedTime || doctor?.app_time) == time.time
                     ? "bg-gray-300"
                     : ""
                 }
                `}
              key={index}
              time={time.time}
              id={time.id}
              onClick={() => {
                handleButtonClick(time.time);
              }}
            >
              {time.time}
            </button>
          );
        })}
      </div>
    );
  };

  // console.log(selectedButton);
return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mt-8"
      >
        {futureDaysInMonth.map((date, index) => (
          <SwiperSlide key={index} className="text-center">
            <button
              className="text-[14px] md:text-[16px] font-bold"
              onClick={() => handleButtonClick(date, index)}
            >
              <div>
                {currentDay === date.getDate()
                  ? "Today"
                  : date.getDate() === currentDay + 1
                  ? "Tomorrow"
                  : date.toLocaleDateString("en-US", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                <p
                  className={`text-green-500 text-[10px] md:text-[14px]  ${
                    (selectedButton || doctor?.app_date) == dateInEN_GB(date)
                      ? "underline  underline-offset-4"
                      : ""
                  }`}
                >
                  8 slot available
                </p>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" mt-8">
        <TimeSlots timeSlots={timeSlots} />
      </div>
      <button
        className="text-white rounded hover:bg-slate-300 transition-colors px-16 mt-12 ml-auto mr-auto sm:mr-0 block py-3 bg-green-600 text-lg font-semibold"
        onClick={() => {
          navigate("/summery");
          setDoctor(completeData);
        }}
      >
        continue
      </button>
    </div>
  );
};

export default Carousel;

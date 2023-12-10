import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const navigate = useNavigate();
  const data = [
    { name: "Dr. John Smith", specialization: "Cardiologist" },
    { name: "Dr. Sarah Johnson", specialization: "Dermatologist" },
    { name: "Dr. Michael Brown", specialization: "Orthopedic Surgeon" },
    { name: "Dr. Emily Davis", specialization: "Pediatrician" },
    { name: "Dr. Robert Wilson", specialization: "Neurologist" },
    { name: "Dr. Jessica Miller", specialization: "Gynecologist" },
    { name: "Dr. Brian Jones", specialization: "Ophthalmologist" },
    { name: "Dr. Ashley White", specialization: "Psychiatrist" },
    { name: "Dr. Christopher Lee", specialization: "Endocrinologist" },
    { name: "Dr. Kimberly Taylor", specialization: "Rheumatologist" },
  ];
  return (
    <Layout>
      <ImageCarousel />
      <section>
        <div className="mx-auto  max-w-screen-lg p-10 border-2 ">
          <h1 className="text-2xl md:text-4xl font-serif text-center font-bold">
            Select your doctor for slot booking{" "}
          </h1>
          <hr className="my-8" />
          <div>
            <div className="flex flex-wrap justify-center gap-4 ">
              {data.map((val, i) => {
                return (
                  <button
                    key={i}
                    className="rounded flex-[0_0_40%] max-sm:flex-[0_0_100%] border-2  lg:flex-[0_0_30%] py-4"
                    onClick={() => {
                      navigate("/slot-booking", { state: val });
                    }}
                  >
                    <h1 className="text-2xl font-semibold">{val.name}</h1>
                    <p>{val.specialization}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <ImageCarousel />
    </Layout>
  );
};

export default Home;

import React from "react";
import Hero from "../components/main/Hero";
import Carousel from "../components/main/Carousel";
import { useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";

const Booking = () => {
  const location = useLocation();
  const data = location?.state;
  return (
    <Layout>
      <section>
        <div className="mx-auto  max-w-screen-lg p-10 border-2">
          <Hero data={data} />
          <Carousel data={data} />
        </div>
      </section>
    </Layout>
  );
};

export default Booking;

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Summery from "./pages/Summery";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summery" element={<Summery />} />
          <Route path="/slot-booking" element={<Booking />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} hideProgressBar={true} />
    </>
  );
};

export default App;

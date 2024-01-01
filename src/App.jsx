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
import StatusPage from "./pages/StatusPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/slot-booking" element={<Booking />} />
          <Route path="/summery" element={<Summery />} />
          <Route path="/status" element={<StatusPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} hideProgressBar={true} />
    </>
  );
};

export default App;

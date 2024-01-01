// StatusPage.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLogin } from "../context/LoginProvider";
import Layout from "../Layout/Layout";

const StatusPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [login, setLogin] = useLogin();

  const userId = login.tokenObject._id;
  console.log(userId);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/status/${userId} `)
      .then((response) => {
        setAppointments(response.data.appointments);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="text-3xl font-bold mb-6">Clinic Appointment Status</h1>

        {appointments.length > 0 ? (
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Doctor Name</th>
                <th className="border px-4 py-2">Doctor Specialization</th>
                <th className="border px-4 py-2">Appointment Time</th>
                <th className="border px-4 py-2">Appointment Date</th>
                <th className="border px-4 py-2">Patient Name</th>
                <th className="border px-4 py-2">Patient Age</th>
                <th className="border px-4 py-2">Patient Gender</th>
                <th className="border px-4 py-2">Patient Phone No</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td className="border px-4 py-2">{appointment.doctorName}</td>
                  <td className="border px-4 py-2">
                    {appointment.doctorSpecialization}
                  </td>
                  <td className="border px-4 py-2">{appointment.appTime}</td>
                  <td className="border px-4 py-2">{appointment.appDate}</td>
                  <td className="border px-4 py-2">
                    {appointment.patientName}
                  </td>
                  <td className="border px-4 py-2">{appointment.patientAge}</td>
                  <td className="border px-4 py-2">
                    {appointment.patientGender}
                  </td>
                  <td className="border px-4 py-2">
                    {appointment.patientPhoneNo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </Layout>
  );
};

export default StatusPage;

import { createContext, useContext, useState } from "react";

export const DoctorContext = createContext();

const DoctorProvider = ({ children }) => {
  const [doctor, setDoctor] = useState([]);
  console.log("doctor", doctor);
  return (
    <DoctorContext.Provider value={[doctor, setDoctor]}>
      {children}
    </DoctorContext.Provider>
  );
};

const useDoctor = () => {
  return useContext(DoctorContext);
};

export { DoctorProvider, useDoctor };

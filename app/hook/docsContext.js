import React, { useState, createContext } from "react";
import { DocAppointment } from "../Constants";

export const DoctorsContext = createContext();

const DoctorsContextProvider = ({ children }) => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleDoctor = (doc) => {
    setSelectedDoc(doc);
  };

  return (
    <DoctorsContext.Provider
      value={{ docAppointment: DocAppointment, selectedDoc, handleDoctor }}
    >
      {children}
    </DoctorsContext.Provider>
  );
};

export default DoctorsContextProvider;

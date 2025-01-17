"use client";
// import { Toaster } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }) => {
  return (
    <>
      {/* <Toaster /> */}
      <ToastContainer draggable />
      {children}
    </>
  );
};

export default Providers;

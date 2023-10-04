import React, { useState } from "react";
import CustomParticle from "../components/CustomParticle";
import { api } from "../utils/api";
import { GoKey } from "react-icons/go";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../store/user";
import { useNavigate } from "react-router-dom";
import decodeToken from "jwt-decode";
import { FiMail } from "react-icons/fi";

const OTP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email: localStorage.getItem("email") || "",
        otp: e.target[2].value
      };

      const response = await api("verify-otp", "PUT", payload);
      if (response.success) {
        toast.success("Verification Successfull");
        dispatch(setToken({ token: response?.data?.token }));
        dispatch(setUser(decodeToken(response?.data?.token)));
        navigate("/panel/dashboard");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const resendOTP = async () => {
    try {
      const response = await api("send-otp", "POST", {
        email: localStorage.getItem("email")
      });
      if (response.success) toast.success(response.message);
      else toast.error(response.message);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-blue-950 w-full text-center">
      <CustomParticle />
      <div className="w-full h-screen flex justify-center items-center">
        <form
          onSubmit={loginHandler}
          className="z-10 bg-white shadow-xl flex flex-col  rounded-xl gap-6 px-3 lg:px-20 py-12"
        >
          <h2 className="text-gray-700 text-4xl font-medium my-4">
            OTP Verification
          </h2>
          <div className="flex flex-col gap-y-5 h-full justify-between">
            <div className="flex relative items-center ">
              <FiMail className=" absolute left-1 w-6 h-6 ml-2 text-gray-500" />
              <input
                className="cursor-not-allowed pl-12 w-full lg:w-96 h-12 rounded border bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="email"
                value={localStorage.getItem("email")}
                disabled
              />
              <button
                type="button"
                onClick={() => {
                  navigate("/login", { state: { signup: true } });
                }}
                className="hover:bg-blue-400 w-32 hover:text-white transition-all duration-700 absolute right-1 bg-white z-10  p-1 text-blue-400 border rounded border-blue-400 "
              >
                Change Email
              </button>
            </div>
            <div className="flex relative items-center ">
              <GoKey className="absolute left-1  w-7 h-7 ml-2 p-1 text-gray-500" />
              <input
                className="pl-12 w-full lg:w-96 h-12 rounded border bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="number"
                placeholder="OTP *"
                required
                name="otp"
              />
              <button
                type="button"
                onClick={resendOTP}
                className="hover:panel-primary-bg w-32 hover:text-white transition-all duration-700 absolute right-1 bg-white z-10  p-1 panel-primary-text border rounded border-red-500 "
              >
                Resend OTP
              </button>
            </div>
            <p className="-my-2 text-md text-gray-800">
              Check Your Inbox or Even Spam for{" "}
              <span className="text-blue-400 font-bold">OTP!</span>
            </p>
            <div>
              <button className=" rounded-md py-2 overflow-hidden relative group cursor-pointer border-2 font-semibold text-[15px] border-blue-400 text-black hover:scale-105 duration-[700ms] w-64">
                <span className="absolute transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-blue-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease w-full"></span>
                <span className="relative text-blue-400 transition duration-[700ms] group-hover:text-white ease w-full">
                  Submit
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomParticle from "../components/CustomParticle";
import { api } from "../utils/api";
import { toast } from "react-hot-toast";

const UpdatePassword = () => {
  const { token } = useParams();
  const naviate = useNavigate();
  const forgetPasswordHandler = async (e) => {
    try {
      e.preventDefault();
      let password = e.target[0].value;
      let confirmPassword = e.target[1]?.value;

      let data = {
        password
      };

      if (password !== confirmPassword) {
        toast.error("Confirm password must be same as password");
        return;
      }
      const response = await api(`forget-password/${token}`, "PUT", data);
      if (response.success) {
        toast.error(response.message);
        naviate("/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="bg-blue-950 w-full text-center">
      <CustomParticle />
      <div className="w-full h-screen flex justify-center items-center">
        <form
          onSubmit={forgetPasswordHandler}
          className="z-10 w-4/5 lg:w-auto bg-white shadow-xl flex flex-col  rounded-xl gap-6 px-3 lg:px-20 py-12"
        >
          <h2 className="text-gray-700 text-4xl font-medium my-4">
            {"Reset Password"}
          </h2>
          <div className="flex flex-col gap-y-5 h-full justify-between">
            <div className="flex relative items-center ">
              <input
                className="pl-12 w-full lg:w-96 h-12 rounded border bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                placeholder="Password *"
                required
                type="password"
              />
            </div>
            <div className="flex relative items-center ">
              <input
                className="pl-12 w-full lg:w-96 h-12 rounded border bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                placeholder="Confirm Password*"
                required
                type="password"
              />
            </div>
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

export default UpdatePassword;

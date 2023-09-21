import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomParticle from "../components/CustomParticle";
import { api } from "../utils/api";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import {
  AiOutlineArrowLeft,
  AiOutlineEye,
  AiOutlineEyeInvisible
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../store/user";
import { toast } from "react-hot-toast";
import decodeToken from "jwt-decode";

const Login = () => {
  const location = useLocation();
  const isSignUp = location?.state?.signup;
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSignUp) {
      setIsLogin(false);
    }
  }, [location]);

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      let name = e.target[0].value;
      let email = e.target[1].value;
      let password = e.target[2].value;
      let confirmPassword = e.target[3]?.value;
      localStorage.setItem("email", email);
      let data = {
        name,
        email,
        password,
        user_type: "1"
      };

      if (isLogin) {
        console.log("inner if")
        const response = await api("sign-in", "POST", data);
        console.log(response,"response")
        if (response.success) {
          dispatch(setToken({ token: response.data.token }));
          dispatch(setUser(decodeToken(response.data.token)));
          toast.success("Login Successfull");
          navigate("/panel/dashboard");
        }
        // if response is not success and token found in api, indicate user is registered but not verified
        else if (!response.success && response.data.token) {
          toast.error(response.message);
          localStorage.setItem("email", email);
          navigate("/otp");
        } else {
          toast.error(response.message);
        }
      } else {
        if (password !== confirmPassword) {
          toast.error("Confirm password must be same as password");
          return;
        }
        const response = await api("/sign-up", "POST", data);
        if (response.success) {
          toast.success("Sign Up Successfull");
          toast.success("OTP has been sent to registered email");
          navigate("/otp");
        } else {
          toast.error(response.message);
        }
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };
  const forgetPasswordHandler = () => {
    navigate("/forget-password");
  };
  return (
    <div className="bg-blue-950 w-full text-center" id="login">
      <CustomParticle />
      <div className="w-full h-screen flex justify-center items-center">
        <form
          onSubmit={loginHandler}
          className="z-10 w-4/5 lg:w-auto bg-white shadow-xl flex flex-col  rounded-xl gap-6 px-3 lg:px-20 py-12"
        >
          <div className="w-full relative">
            <Link to={"/"}>
              <AiOutlineArrowLeft className="w-6 absolute left-1 h-6 top-6 text-gray-500  cursor-pointer hover:scale-110 hover:panel-primary-text transition-all duration-700" />
            </Link>
            <h2 className="text-gray-700 text-4xl font-medium my-4 ">
              {isLogin ? "Login" : "Register"}
            </h2>
          </div>
          <div className="flex flex-col gap-y-5 h-full justify-between">
            <div className="flex relative items-center ">
              <FiUser className="absolute left-1  w-7 h-7 ml-2 p-1 text-gray-500" />
              <input
                className="pl-12 w-full lg:w-96 h-12 rounded border bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="text"
                placeholder="User Name *"
                required
              />
            </div>
            <div className="flex relative items-center ">
              <FiMail className=" absolute left-1 w-6 h-6 ml-2 text-gray-500" />
              <input
                className="pl-12 w-full lg:w-96 h-12 rounded border bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="email"
                placeholder="Email Address *"
                required
              />
            </div>
            <div className="flex relative items-center">
              <FiLock className=" absolute left-1 w-6 h-6 ml-2 text-gray-500" />
              <input
                className="pl-12 w-full lg:w-96 h-12 rounded border bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password *"
                required
              />
              {showPassword && (
                <AiOutlineEye
                  onClick={() => setShowPassword(false)}
                  className="absolute right-1 w-6 h-6 mr-2 text-gray-500 cursor-pointer"
                />
              )}
              {!showPassword && (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPassword(true)}
                  className="absolute right-1 w-6 h-6 mr-2 text-gray-500 cursor-pointer"
                />
              )}
            </div>
            <div className="flex relative items-center">
              {!isLogin && (
                <>
                  <FiLock className=" absolute left-1 w-6 h-6 ml-2 text-gray-500" />
                  <input
                    className="pl-12 w-full lg:w-96 h-12 rounded border bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                    type={`${showConfirmPassword ? "text" : "password"}`}
                    placeholder="Confirm Password *"
                    required
                  />
                  {showConfirmPassword && (
                    <AiOutlineEye
                      onClick={() => setShowConfirmPassword(false)}
                      className="absolute right-1 w-6 h-6 mr-2 text-gray-500 cursor-pointer"
                    />
                  )}
                  {!showConfirmPassword && (
                    <AiOutlineEyeInvisible
                      onClick={() => setShowConfirmPassword(true)}
                      className="absolute right-1 w-6 h-6 mr-2 text-gray-500 cursor-pointer"
                    />
                  )}
                </>
              )}
            </div>

            <div>
              <button className=" rounded-md py-2 overflow-hidden relative group cursor-pointer border-2 font-semibold text-[15px] border-blue-400 text-black hover:scale-105 duration-[700ms] w-64">
                <span className="absolute transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-blue-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease w-full"></span>
                <span className="relative text-blue-400 transition duration-[700ms] group-hover:text-white ease w-full">
                  Submit
                </span>
              </button>

              {isLogin && (
                <>
                  {" "}
                  <p className="text-[1rem] font-normal  text-center mt-[6px]">
                    Don't have an account ?{" "}
                    <span
                      onClick={() => setIsLogin(false)}
                      className="cursor-pointer underline text-blue-700"
                    >
                      signup Here
                    </span>
                  </p>
                  <p className="text-[1rem] font-normal text-center mt-[6px]">
                    Forget Password ?{" "}
                    <span
                      onClick={forgetPasswordHandler}
                      className="cursor-pointer underline text-red-500"
                    >
                      click Here
                    </span>
                  </p>
                </>
              )}

              {!isLogin && (
                <>
                  <p className="text-[1rem] font-normal  text-center mt-[6px]">
                    Already a user ?{" "}
                    <span
                      onClick={() => setIsLogin(true)}
                      className="cursor-pointer underline text-[#0000EE]"
                    >
                      login here !
                    </span>
                  </p>
                  <p className="text-[1rem] font-normal text-center mt-[6px]">
                    Do you want to know ?{" "}
                    <span
                      onClick={() => navigate("/?page=howitwork")}
                      className="cursor-pointer underline text-red-500"
                    >
                      How it works
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

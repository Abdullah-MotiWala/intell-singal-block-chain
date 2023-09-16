import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../utils/api";
import { toast } from "react-hot-toast";

const VerifyUser = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [isUserVerified, setUserVerified] = useState(false);
  const [verificationError, setVerificationError] = useState(false);
  const verifyUser = async () => {
    try {
      const response = await api(`verify/${token}`, "PUT");
      if (response.success) {
        toast.error(response.message);
        setUserVerified(true);
        navigate("/");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setVerificationError(true);
    }
  };

  useEffect(() => {
    verifyUser();
  }, [token]);

  return (
    <div className="flex justify-center items-center">
      {verificationError && (
        <h3 className="text-red-600">Verification Failed! Try Again</h3>
      )}
      {isUserVerified || verificationError ? (
        <button className="w-full" onClick={() => navigate("/")}>
          Go To Home
        </button>
      ) : (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white bg-opacity-75 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default VerifyUser;

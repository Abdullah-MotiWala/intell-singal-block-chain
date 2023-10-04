import React, { useEffect, useMemo, useState } from "react";
import { FiMail, FiUser } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { setUser } from "../store/user";
import countryList from 'react-select-country-list'

const Setting = () => {
  const { user, token } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countryOptions = useMemo(() => countryList().getData(), [])

  const initialData = { email: "", name: "", country: "" };
  const [data, setData] = useState(initialData);
  const [imageURL, setImageUrl] = useState(null);
  const handleSave = async () => {
    try {
      const payload = { name: data.name };
      if (data.country) payload.country = data.country;
      if (imageURL) payload.profile_image = imageURL;

      const response = await api("update-profile", "PUT", payload, token);
      if (response.success) {
        toast.success("Profile Updated Successfull");
        dispatch(
          setUser({ user: { ...user, ...data, profile_image: imageURL } })
        );
        navigate("/panel/dashboard");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleImageChange = async (event) => {
    try {
      setLoading(true);
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "user-profile");
      formData.append(
        "cloud_name",
        process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
      );

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData
        }
      );

      const data = await response.json();
      setImageUrl(data.secure_url);
      if (data.secure_url) toast.success("Image Uploaded Successfully");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
      toast.error(err.message);
    }
  };
  useEffect(() => {
    if (user?.email) {
      const tempUser = { ...user };
      const userData = {
        email: tempUser.email,
        name: tempUser.name,
        country: tempUser.country
      };
      setImageUrl(tempUser?.profile_image);
      setData(userData);
    }
  }, [user]);
  return (
    <div className="w-full p-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold panel-primary-text">My Profile</h2>
        <button
          className="panel-primary-bg rounded-xl px-6 p-2 text-white font-bold hover:scale-105 transition-all duration-500"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="relative bg-white h-[80vh] overflow-y-auto mt-4 rounded-md p-2 flex justify-center items-start">
        <div>
          <div className="flex flex-col items-center mt-6 mb-8">
            <div className="w-32 h-32 mb-12 flex justify-center overflow-hidden items-center rounded-full outline outline-offset-4 outline-1 outline-red-500">
              <img
                src={`${imageURL || "/img/avatar.png"} `}
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
            <input
              onChange={handleImageChange}
              type="file"
              id="image"
              name="image"
              hidden
              disabled={loading}
            />
            <label htmlFor="image">
              <div className="text-center cursor-pointer panel-primary-bg rounded-sm px-4 p-2 w-56 text-white font-bold hover:scale-105 transition-all duration-500">
                {loading ? "Loading..." : "Upload"}
              </div>
            </label>
          </div>
          <div className="flex w-full flex-col gap-y-5 h-full justify-between">
            <div className="flex w-full relative items-center ">
              <FiMail className=" absolute left-1 w-6 h-6 ml-2 panel-primary-text" />
              <input
                className="cursor-not-allowed pl-12 w-full lg:w-96 h-12 rounded border-red-500 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="email"
                placeholder="Email Address"
                readOnly
                name="email"
                value={data.email}
              />
            </div>
            <div className="flex w-full relative items-center ">
              <FiUser className="absolute left-1  w-7 h-7 ml-2 p-1 panel-primary-text" />
              <input
                className="pl-12 w-full lg:w-96 h-12 rounded border border-red-500 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="text"
                name="name"
                placeholder="User Name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full relative items-center">
              <BsGlobe className="absolute left-1  w-7 h-7 ml-2 p-1 panel-primary-text" />
              <select
                className="pl-12 w-full lg:w-96 h-12 rounded border-red-500 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                value={data.country}
              >
              {countryOptions.map((c)=>{
                return <option  key={c.value} value={c.label}>{c.label}</option>
              })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

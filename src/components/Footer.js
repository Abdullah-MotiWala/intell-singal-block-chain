import { Link } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";
import { SiMinutemailer } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { MdSubject } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { api } from "../utils/api";
import toast from "react-hot-toast";

const Footer = () => {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  const handleRoute = (token) => {
    if (token) {
      navigate("/panel/dashboard");
    } else {
      navigate("/login");
    }
  };

  const formChangeHandler = (e) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api("contact-us", "POST", contactForm);
      if (response.success) {
        toast.success("Form Submitted Successfully");
        setContactForm({
          fullName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        toast.error(response.message);
      }
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <footer className="bg-black pt-6 w-full flex flex-col items-center">
      <div className="bg-black px-4 w-full max-w-5xl flex flex-col items-center">
        <div
          id="contactUs"
          className="py-6 border-b  flex flex-col items-center lg:flex-row lg:justify-end w-full border-gr1 gap-y-10"
        >
          <div className="lg:mr-auto pr-4 flex flex-col gap-6">
            <h2 className="custom-mini-sub-heading ">
              Get Ecosystem updates in your inbox
            </h2>
            <h3 className="custom-mini-sub-heading text-white opacity-100">
              Quick Support
            </h3>
            <p className="custom-caption-text">
              We're here for you, waiting to answer your queries, our team is
              happy to help you.
            </p>
            <div className="flex gap-2">
              <a
                href="mailto:intellsignals.entertainment@gmail.com"
                className="hover:text-green-400 cursor-pointer flex transition duration-200 ease-in text-white "
              >
                <SiMinutemailer className="w-6 h-6 mr-2  text-green-400" />
                intellsignals.entertainment@gmail.com
              </a>
            </div>
          </div>
          <form className="flex bg-gr2 flex-col hover:scale-105 transition duration-300 rounded-xl w-11/12 lg:w-1/2 gap-6 py-3 px-4">
            <h2 className=" text-gray-300 text-xl font-bold ">
              Get in touch with us!
            </h2>
            <div className="flex flex-col gap-y-5">
              <div className="flex relative items-center ">
                <BiUser className="absolute left-1 w-9 h-9 p-1 text-gray-500 hover:animate-bounce" />
                <input
                  className="pl-12 rounded bg-gray-200 shadow-lg w-full  p-2 placeholder:text-gr1 "
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  value={contactForm.fullName}
                  onChange={formChangeHandler}
                />
              </div>
              <div className="flex relative items-center ">
                <FiMail className=" absolute left-1 w-7 h-7 mr-2 text-gray-500 hover:animate-bounce" />
                <input
                  className="pl-12 w-full rounded bg-gray-200 shadow-lg   p-2 placeholder:text-gr1 "
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={formChangeHandler}
                  value={contactForm.email}
                />
              </div>
              <div className="flex relative items-center">
                <MdSubject className="absolute left-1 w-7 h-7  mr-2 text-gray-500 hover:animate-bounce" />
                <input
                  className="pl-12 w-full rounded bg-gray-200 shadow-lg  p-2 placeholder:text-gr1 "
                  type="text"
                  placeholder="Enter Your Subject"
                  name="subject"
                  onChange={formChangeHandler}
                  value={contactForm.subject}
                />
              </div>
              <div className="flex relative items-center">
                <AiOutlineMessage className="absolute left-1 top-2 w-7 h-7 mr-2 text-gray-500 hover:animate-bounce" />
                <textarea
                  className="pl-12 w-full p-2 rounded bg-gray-200  shadow-lg   placeholder:text-gr1 "
                  placeholder="Message"
                  name="message"
                  onChange={formChangeHandler}
                  value={contactForm.message}
                ></textarea>
              </div>
              <button
                onClick={handleSendMessage}
                className="text-white px-4 py-2 rounded-lg bg-sk hover:bg-sk1 transition duration-200"
                disabled={loading}
              >
                {loading ? "Loading..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        <div
          id="footer"
          className="py-10 px-2 w-full  border-b border-gr1 grid lg:grid-cols-4 grid-cols-2 gap-4 text-white"
        >
          <div className="col-span-1 flex flex-col gap-3">
            <h2 className="font-bold text-lg">Learn</h2>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this?.handleSetActive}
            >
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Home
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </ScrollLink>
            <ScrollLink
              to="whatWeAre"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this?.handleSetActive}
              className="w-full"
            >
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  About Us
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </ScrollLink>

            <ScrollLink
              to="staking"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this?.handleSetActive}
              className="w-full"
            >
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Sevices
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </ScrollLink>

            <ScrollLink
              to="whatWeAre"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this?.handleSetActive}
              className="w-full"
            >
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  How It Works
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </ScrollLink>
          </div>
          <div className="  col-span-1 flex flex-col gap-3">
            <h2 className="  font-bold text-lg">Quick Links</h2>
            <Link to="blog">
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Blog
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </Link>

            <ScrollLink
              to="specialoffers"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this?.handleSetActive}
              className="w-full"
            >
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Special Offers
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </ScrollLink>
          </div>
          <div className="  col-span-1 flex flex-col gap-3">
            <h2 className=" font-bold text-lg ">Get In Touch</h2>
            <Link to="contact">
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Contact Us
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </Link>
            <ScrollLink
              to="faq"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this?.handleSetActive}
              className="w-full"
            >
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  FAQ
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </ScrollLink>
            <Link to="login">
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Login/Signup
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </Link>
          </div>

          <div className="col-span-1 flex flex-col gap-3">
            <h2 className="font-bold text-lg">Social Links</h2>
            <a
              href="https://www.facebook.com/profile.php?id=100092186089195&mibextid=ZbWKwL"
              target="_blank"
            >
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Facebook
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </a>
            <a
              href="https://youtube.com/@INTELLSIG?si=7z-ItYEHqAqh0SAp"
              target="_blank"
            >
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Youtube
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </a>
            <a href="https://instagram.com/intellsignals" target="_blank">
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Instagram
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </a>
            <a href="https://t.me/IntellSignal" target="_blank">
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Twitter
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7080135501327863809"
              target="_blank"
            >
              <div className="relative inline-block group">
                <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                  Linkedin
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
              </div>
            </a>
          </div>
        </div>
        <div className="py-10 pl-2 w-full text-white flex flex-wrap items-center ">
          <img
            src="/img/home-1.png"
            alt="home"
            className="w-32 h-auto hover:scale-95 transition duration-300 ease-in-out"
          />
          {/* <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this?.handleSetActive}
            
          > */}
          <div
            className="custom-button ml-auto lg:mr-28 bg-sk hover:bg-sk1 transition duration-200"
            onClick={handleRoute}
          >
            <button type="submit">Subscribe Now</button>
          </div>
          {/* </ScrollLink> */}
        </div>
      </div>
      <div className="flex flex-col items-center w-full  pt-8  pb-3 bg-gr2 gap-y-4 ">
        <div className="flex items-center gap-4">
          <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition-all duration-700">
            <img src="/img/wa.png" alt="home" className="w-5 h-5" />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
            <img src="/img/li.png" alt="home" className="w-5 h-5" />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
            <img src="/img/gm.png" alt="home" className="w-5 h-5" />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
            <img src="/img/tp.png" alt="home" className="w-5 h-5" />
          </div>
        </div>
        <div className="relative w-full flex justify-between">
          <p className="text-white">@copyright2023 IntellSignals.com</p>
          <p
            onclick={() => window.open("https://codezoone.netlify.app/")}
            class="text-xs mr-5 bg-white p-1 px-2 rounded-3xl relative 
            hover:cursor-pointer hover:font-bold hover:text-white hover:panel-primary-bg hover:scale-x-105 hover:duration-300"
          >
            Developed By CodeZone
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

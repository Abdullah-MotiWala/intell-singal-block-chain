import { HiMenuAlt2 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Router, Link as RouterLink, useLocation } from "react-router-dom";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { scroller } from "react-scroll";
import { useSelector } from "react-redux";
const Nav = () => {
  const [opennav, setopennav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.user);

  const openfun = () => {
    setopennav(!opennav);
  };
  const { openConnectModal } = useConnectModal();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { search } = useLocation();

  useEffect(() => {
    let pageSection = search?.split("=")?.[1];
    if (pageSection) {
      scroller.scrollTo(pageSection);
    }
  }, [search]);

  return (
    <nav className="w-full  fixed bg-gr opacity-90 p-3 flex  border-b border-gr2 z-20 ">
      <div className="ml-2 mr-4 hover:scale-95 transition duration-300 ease-in-out">
        <Link to="/">
          <img src="/img/home-1.png" alt="DP" className="w-28 h-auto" />
        </Link>
      </div>

      <div className="hidden ml-4  mr-2 xl:flex xl:gap-6 xl:items-end ">
        <div className="relative group cursor-pointer flex flex-col">
          <span className="text-white font-normal text-sm relative z-10 hover:text-red-500">
            About Us
          </span>
          {/* <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div> */}
          <div className="divide-y w-32 absolute left-1 top-10 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-white py-2 text-gray-900 rounded-lg">
            <div className="cursor-pointer px-4">
              <Link
                to="whatWeAre"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={this?.handleSetActive}
                className="w-full"
              >
                <span className="font-normal text-sm  relative z-10 hover:text-red-500">
                  Who We Are
                </span>
                <div className="abssolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 hover:scale-x-100"></div>
              </Link>
            </div>

            <div className="cursor-pointer px-4 ">
              <Link
                className="w-full"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={this?.handleSetActive}
              >
                <span className="font-normal text-sm  relative z-10 hover:text-red-500">
                  What We Are
                </span>
                <div className="abssolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 hover:scale-x-100"></div>
              </Link>
            </div>
          </div>
        </div>
        <Link
          to="staking"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this?.handleSetActive}
        >
          <div className="relative inline-block group cursor-pointer">
            <span className="text-white font-normal text-sm relative z-10 group-hover:text-red-500">
              Features
            </span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
          </div>
        </Link>
        <Link
          to="specialoffers"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this?.handleSetActive}
        >
          <div className="relative inline-block group cursor-pointer">
            <span className="text-white font-normal text-sm relative z-10 group-hover:text-red-500">
              Subscription
            </span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
          </div>
        </Link>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this?.handleSetActive}
        >
          <div className="relative inline-block group cursor-pointer">
            <span className="text-white font-normal text-sm relative z-10 group-hover:text-red-500">
              INSIG Token
            </span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
          </div>
        </Link>
        <Link
          to="footer"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this?.handleSetActive}
        >
          <div className="relative inline-block group cursor-pointer">
            <span className="text-white font-normal text-sm relative z-10 group-hover:text-red-500">
              Join Our Socials
            </span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
          </div>
        </Link>

        <RouterLink to="INSIG">
          <div className="relative inline-block group cursor-pointer">
            <span className="text-white font-normal text-sm relative z-10 group-hover:text-red-500">
              INSIG Game
            </span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
          </div>
        </RouterLink>
        <Link
          to="introToAI"
          activeClass="active"
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this?.handleSetActive}
        >
          <RouterLink to="Ai_Platform">
            <div className="relative inline-block group cursor-pointer">
              <span className="text-white font-normal text-sm relative z-10 group-hover:text-red-500">
                Ai Platform
              </span>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
            </div>
          </RouterLink>
        </Link>

        {!user && (
          <RouterLink to="login">
            <div className="relative inline-block group cursor-pointer">
              <span className="text-white font-normal text-sm relative z-10 group-hover:text-red-500">
                Login/Signup
              </span>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
            </div>
          </RouterLink>
        )}
        {user && (
          <RouterLink to="panel/dashboard">
            <div className="relative inline-block group cursor-pointer">
              <span className="text-white font-normal text-sm relative z-10 group-hover:text-red-500">
                Dashboard
              </span>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
            </div>
          </RouterLink>
        )}
      </div>

      <div className=" ml-auto flex">
        <button className="rounded-lg px-4 py-1 overflow-hidden relative group cursor-pointer border-2 font-semibold text-[15px] border-orange-400 text-white hover:scale-105 duration-[700ms]">
          <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-orange-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-orange-400 transition duration-[700ms] group-hover:text-white ease">
            <Link
              to="service"
              activeClass="active"
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this?.handleSetActive}
            >
              INSIG TOKEN
            </Link>
          </span>
        </button>

        <HiMenuAlt2
          className="xl:hidden w-10 h-10 ml-3 mr-1 text-gray-200 hover:text-sk cursor-pointer"
          onClick={openfun}
        />
      </div>
      <ConnectButton accountStatus="avatar" />
    </nav>
  );
};
export default Nav;

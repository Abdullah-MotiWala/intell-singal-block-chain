import { MdArrowOutward } from "react-icons/md";
import NetworkBanner from "../banners/NetworkBanner";
import LatestNews from "../sections/LatestNews";
import IntelligentSignalsToken from "../sections/IntelligentSignalsToken";
import VideoSection from "../sections/VideoSection";
import DemandAppBanner from "../banners/DemandAppBanner";
import WhatAreInsig from "../sections/WhatAreInsig";
import WhyUseInsig from "../sections/WhyUseInsig";
import Staking from "../sections/Staking";
import Tokenomics from "../sections/Tokenomics";
import IntroductiontoAI from "../sections/IntroductiontoAI";
import IntelligentSignalEcosystem from "../sections/IntelligentSignalEcosystem";
import { Link } from "react-scroll";
import Plans from "../sections/Plans";
import FoundingPartners from "../sections/FoundingPartners";
import FAQ from "../sections/FAQ";
import FreeSignals from "../sections/FreeSignals";
import OurTrader from "../sections/OurTrader";
import InfoBox from "../sections/InfoBox";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";
import WhoWeAre from "../sections/whoWeAre";

const Home = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  const handleRoute = (token) => {
    if (token) {
      navigate("/panel/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center mt-20 mb-4 lg:flex-row w-full min-h-full lg:min-h-screen"
        id="home"
      >
        <div className=" w-3/4 lg:w-1/2  lg:pl-32  bg-gr flex flex-col gap-4 justify-center items-center lg:items-stretch">
          <h1 className="custom-mini-heading mb-3">
            <span className="text-white">INSIG </span>
            <span className="text-white">TOKEN.</span>{" "}
          </h1>
          <p className="custom-mini-sub-heading w-full mb-3">
            Start Trading Now
          </p>
          <p className="custom-caption-text">
            Welcome to the INSIG Ecosystem – your portal to intelligent crypto
            trading. Explore AI-powered signals, an active crypto community, and
            unlock the full potential of the INSIG Token for enhanced trading
            experiences and beyond.
          </p>
          <button
            onClick={handleRoute}
            className="md:w-1/2 w-full mt-6 overflow-hidden relative group cursor-pointer  border-2 bg-gray-800 text-[15px] border-yellow-400 text-black hover:scale-105 duration-[700ms] custom-button"
          >
            <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-orange-400 to-red-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="font-bold relative text-yellow-400 transition duration-[700ms] group-hover:text-white ease">
              {/* <Link
                to="specialoffers"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={this?.handleSetActive}
                onClick={handleRoute}
              > */}
              Start Now
              {/* </Link> */}
              {/* </Link> */}
            </span>
          </button>
        </div>
        <div className="flex justify-center w-3/4 lg:w-1/2 pt-8 lg:pr-2  ">
          <img
            src="/img/hero.png"
            alt="a"
            className=" w-2/3 rounded-3xl bg-transparent hover:scale-95 transition duration-300 ease-in-out cursor-pointer"
          />
        </div>
      </div>

      {/* <NetworkBanner handleRoute={handleRoute} /> */}

      <IntelligentSignalsToken />
      <VideoSection handleRoute={handleRoute} />
      <Plans />
      <WhatAreInsig />
      <WhoWeAre />
      <WhyUseInsig />
      {/* <LatestNews /> */}
      <Staking />
      <FreeSignals handleRoute={handleRoute} />
      {/* <Tokenomics/> */}
      <IntroductiontoAI handleRoute={handleRoute} />
      {/* <OurTrader /> */}
      {/* <InfoBox /> */}

      <IntelligentSignalEcosystem />
      {/* <DemandAppBanner handleRoute={handleRoute} /> */}
      {/* <FoundingPartners /> */}
      <FAQ />

      <Footer />
    </>
  );
};

export default Home;

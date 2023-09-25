import { FaWalking } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BsFillPersonFill, BsFillPeopleFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const WhyUseInsig = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const sectionRef = useRef(null);

  const targetValue1 = 25;
  const targetValue2 = 100;
  const targetValue3 = 500;

  const duration = 2000;
  const step1 = targetValue1 / (duration / 1000);
  const step2 = targetValue2 / (duration / 1000);
  const step3 = targetValue3 / (duration / 1000);

  const animateValues = () => {
    let startTime1, startTime2, startTime3;
    let animationFrameId1, animationFrameId2, animationFrameId3;

    const animate1 = (timestamp) => {
      if (!startTime1) {
        startTime1 = timestamp;
      }

      const elapsedTime = timestamp - startTime1;
      const newCount1 = Math.min(targetValue1, step1 * (elapsedTime / 1000));
      setCount1(newCount1);

      if (newCount1 < targetValue1) {
        animationFrameId1 = requestAnimationFrame(animate1);
      }
    };

    const animate2 = (timestamp) => {
      if (!startTime2) {
        startTime2 = timestamp;
      }

      const elapsedTime = timestamp - startTime2;
      const newCount2 = Math.min(targetValue2, step2 * (elapsedTime / 1000));
      setCount2(newCount2);

      if (newCount2 < targetValue2) {
        animationFrameId2 = requestAnimationFrame(animate2);
      }
    };

    const animate3 = (timestamp) => {
      if (!startTime3) {
        startTime3 = timestamp;
      }

      const elapsedTime = timestamp - startTime3;
      const newCount3 = Math.min(targetValue3, step3 * (elapsedTime / 1000));
      setCount3(newCount3);

      if (newCount3 < targetValue3) {
        animationFrameId3 = requestAnimationFrame(animate3);
      }
    };

    animationFrameId1 = requestAnimationFrame(animate1);
    animationFrameId2 = requestAnimationFrame(animate2);
    animationFrameId3 = requestAnimationFrame(animate3);

    return () => {
      cancelAnimationFrame(animationFrameId1);
      cancelAnimationFrame(animationFrameId2);
      cancelAnimationFrame(animationFrameId3);
    };
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValues();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const formatCount = (count) => {
    if (count >= 1000000) {
      return `${Math.round(count / 100000)}K`;
    } else {
      return Math.round(count);
    }
  };

  return (
    <div
      className="flex w-full flex-col text-center md:text-left mb-24 items-center px-4 py-12 bg-cover rounded"
      style={{ backgroundImage: "url('/img/b2.jpg')" }}
      id="about"
    >
      <h1 className="custom-mini-heading text-white mb-3">
        Why use Intelligent{" "}
        <span className="text-blue-400 animate-pulse  ">Signals?</span>
      </h1>
      <h4 className="custom-caption-text">
        Trading in Crypto is not easy, and most traders lose money! Online
        educational resource Tradeciety (www.tradeciety.com){" "}
      </h4>
      <div className="p-10 w-full max-w-4xl flex flex-col md:flex-row md:items-start md:justify-center items-center gap-x-12 gap-y-7">
        <div className="flex items-center flex-col w-3/4 md:w-1/3 gap-6">
          <BiWallet className="w-14 h-14 cursor-pointer text-blue-400 transform rotate-0 hover:rotate-180 transition-transform duration-300" />
          <h4 className="text-gray-100 text-2xl font-semibold">
            95 % of traders in Crypto lose money
          </h4>
        </div>
        <div className="flex items-center flex-col w-3/4 md:w-1/3 gap-6">
          <FaWalking className="w-14 h-14 cursor-pointer text-blue-400 transform rotate-0 hover:rotate-0 transition-transform duration-300" />
          <h4 className="text-gray-100 text-2xl font-semibold">
            80% of day traders quit in the first two years
          </h4>
        </div>
        <div className="flex items-center flex-col w-3/4 md:w-1/3 gap-6">
          <BsCurrencyExchange className="w-14 h-14 cursor-pointer text-blue-400 transform rotate-0 hover:rotate-180 transition-transform duration-300" />
          <h4 className="text-gray-100 text-2xl font-semibold">
            Traders with a ten-year track record of losing continue to trade!
          </h4>
        </div>
      </div>
      <div className="p-10 w-full max-w-6xl flex flex-col md:flex-row md:items-start md:justify-center items-center gap-x-12 gap-y-7">
        <div className="relative flex flex-col items-center p-4 border-4 border-blue-400 hover:border-white group rounded-2xl w-3/4 md:w-1/3 overflow-hidden group">
          <div className="absolute left-0 top-0 w-0 h-full bg-red-400 transition-all duration-1000 origin-left group-hover:w-full z-10"></div>
          <div className="absolute right-0 top-0 w-0 h-full bg-red-400 transition-all duration-1000 origin-right group-hover:w-full z-10"></div>
          <h2 className="text-5xl py-3 group-hover:text-white font-bold text-blue-400 relative z-20">
            2-5
          </h2>
          <p className="text-2xl text-center font-bold group-hover:text-white text-blue-400 relative z-20">
            Crypto Signals
          </p>
          <p className="text-2xl text-center font-bold group-hover:text-white text-blue-400 relative z-20">
            Per day
          </p>
        </div>

        <div className="relative flex flex-col items-center p-4 border-4 border-blue-400 hover:border-white group rounded-2xl w-3/4 md:w-1/3 overflow-hidden group">
          <div className="absolute left-0 top-0 w-full h-0 bg-yellow-400 transition-all duration-1000 origin-top group-hover:h-full z-10"></div>
          <div className="absolute right-0 bottom-0 w-full h-0 bg-yellow-400 transition-all duration-1000 origin-bottom group-hover:h-full z-10"></div>
          <h2 className="text-5xl group-hover:text-white   py-3 font-bold text-blue-400 z-20">
            82%
          </h2>
          <p className="text-2xl group-hover:text-white   font-bold text-blue-400 z-20">
            Success
          </p>
          <p className="text-2xl group-hover:text-white   font-bold text-blue-400 z-20">
            Rate
          </p>
        </div>

        <div className="relative flex flex-col items-center p-4 border-4 border-blue-400 hover:border-white group rounded-2xl w-3/4 md:w-1/3 overflow-hidden group">
          <div className="absolute left-0 top-0 w-0 h-full bg-orange-400 transition-all duration-1000 origin-left group-hover:w-full z-10"></div>
          <div className="absolute right-0 top-0 w-0 h-full bg-orange-400 transition-all duration-1000 origin-right group-hover:w-full z-10"></div>
          <h2 className="text-5xl group-hover:text-white py-3 font-bold text-blue-400 z-20">
            50k+
          </h2>
          <p className="text-2xl group-hover:text-white font-bold text-blue-400 z-20">
            Telegram
          </p>
          <p className="text-2xl group-hover:text-white font-bold text-blue-400 z-20">
            Members
          </p>
        </div>
      </div>
      {/* OurGoal Banner */}
      <div
        ref={sectionRef}
        className="flex flex-col w-4/5 items-center py-4 relative -bottom-7"
      >
        <h2 className=" text-white custom-mini-heading mb-3">
          Our <span className="text-orange-400">Goals</span>{" "}
        </h2>
        <div className="bg-gray-100 p-10 md:p-14 shadow-2xl shadow-gray-600  rounded-xl flex flex-col lg:flex-row md:items-start md:justify-center items-center gap-x-12 gap-y-7">
          <div className="flex w-4/5 md:w-full sm:w-full gap-6">
            <BsFillPersonFill className="w-14 h-14 cursor-pointer text-blue-400" />
            <div className="flex flex-col">
              <h3 className="text-gray-600 text-5xl font-semibold">
                {/* {Math.round(count1)} */}
                {`${formatCount(count1)}K`}
              </h3>
              <h4 className="text-gray-400">
                Active Subscribers in{" "}
                <span className="text-orange-400 font-bold">1 Year</span>
              </h4>
            </div>
          </div>
          <div className="flex w-4/5 md:w-full sm:w-full gap-6">
            <BsFillPeopleFill className="w-14 h-14 cursor-pointer text-blue-400" />
            <div className="flex flex-col">
              <h3 className="text-gray-600 text-5xl font-semibold">
                {`${Math.round(count2)}K`}
              </h3>
              <h4 className="text-gray-400">
                Active Subscribers in{" "}
                <span className="text-orange-400 font-bold">3 Years</span>
              </h4>
            </div>
          </div>
          <div className="flex w-4/5 md:w-full sm:w-full gap-6">
            <FaUsers className="w-14 h-14 cursor-pointer text-blue-400" />
            <div className="flex flex-col">
              <h3 className="text-gray-600 text-5xl font-semibold">
                {`${Math.round(count3)}K`}
              </h3>
              <h4 className="text-gray-400">
                Active Subscribers in{" "}
                <span className="text-orange-400 font-bold">5 Years</span>{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUseInsig;

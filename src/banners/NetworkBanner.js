import { useEffect, useRef, useState } from "react";
const NetworkBanner = ({ handleRoute }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const sectionRef = useRef(null);

  const targetValue1 = 949377;
  const targetValue2 = 154294919;

  const duration = 2000;
  const step1 = targetValue1 / (duration / 1000);
  const step2 = targetValue2 / (duration / 1000);

  const animateValues = () => {
    let startTime1, startTime2;
    let animationFrameId1, animationFrameId2;

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

    animationFrameId1 = requestAnimationFrame(animate1);
    animationFrameId2 = requestAnimationFrame(animate2);

    return () => {
      cancelAnimationFrame(animationFrameId1);
      cancelAnimationFrame(animationFrameId2);
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
      return `${Math.round(count / 100000)}`;
    } else {
      return Math.round(count);
    }
  };
  return (
    // <div className='bg-gradient-to-b from-[#60efff] to-[#0061ff] w-full flex justify-center'>
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-orange-400 to-red-500 w-full flex justify-center"
    >
      <div className="py-10 px-4  w-full max-w-6xl flex flex-col lg:flex-row lg:items-start lg:justify-center items-center gap-x-12 gap-y-7">
        <div className="">
          <h3 className="text-black text-xl">NETWORK AT A GLANCE</h3>
        </div>
        <div className=" flex flex-col items-center">
          <h3 className="text-black text-xl">TOTAL HOTSPOTS</h3>
          <h4 className="text-black text-3xl font-semibold">
            {formatCount(count1).toLocaleString()}
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-black text-xl">CIRCULATING HNT SUPPLY</h3>
          <h4 className="text-black text-3xl font-semibold">
            {formatCount(count2)}
          </h4>
        </div>
        {/* <div
          onClick={handleRoute}
          className=" py-3 custom-button ml-0 lg:ml-auto bg-gray-800 text-white shadow-lg   hover:bg-sk1 transition duration-300 ease-in-out"
        >
          View Network Coverage
        </div> */}
      </div>
    </div>
  );
};

export default NetworkBanner;

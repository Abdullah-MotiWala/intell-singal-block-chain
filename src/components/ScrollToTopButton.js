import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        className={`scroll-to-top-button z-50 rounded-full hover:animate-pulse bg-white p-4 font-black fixed bottom-10 right-2 ${
          isVisible ? "visible" : ""
        }`}
        onClick={scrollToTop}
      >
        <BsFillArrowUpCircleFill className="font-bold w-10 h-10 panel-primary-text" />
      </button>
    )
  );
};

export default ScrollToTopButton;

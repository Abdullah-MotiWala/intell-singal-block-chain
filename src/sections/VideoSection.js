import { FaRegLightbulb } from "react-icons/fa";

const VideoSection = ({ handleRoute }) => {
  return (
    <div
      className="py-12 flex flex-col items-center w-full h-auto lg:min-h-screen"
      id="service"
      data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
    >
      <div className=" bg-gradient-to-r from-orange-400 to-red-500 w-4/5 md:w-2/3 rounded-t-lg flex justify-center">
        <div className="py-6 px-4 w-full flex flex-col lg:flex-row justify-around items-center">
          <button
            onClick={handleRoute}
            className=" rounded-full px-5 py-2 md:w-auto w-full md:my-auto my-3 overflow-hidden relative group cursor-pointer font-semibold text-lg bg-[#0061ff] text-black hover:scale-95 transition duration-300 ease-in-out "
          >
            <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-gray-800 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
              INSIG TOKEN
            </span>
          </button>
          <button
            onClick={() =>
              window.open(
                "https://intellsignals.com/wp-content/uploads/2023/05/whitepaper.pdf"
              )
            }
            className=" rounded-full px-5 py-2 md:w-auto w-full md:my-auto my-3 overflow-hidden relative group cursor-pointer font-semibold text-lg bg-green-500 text-black hover:scale-95 transition duration-300 ease-in-out "
          >
            <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-gray-800 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
              White Paper
            </span>
          </button>
        </div>
      </div>
      <div className="bg-[#686767] hover:bg-[#7f7e7e] rounded-b-3xl  px-10 overflow-x-auto py-6 w-4/5 md:w-2/3 flex flex-col  items-center hover:shadow-2xl hover:scale-105 transition-all cursor-pointer duration-500">
        <div className="pb-6 flex flex-col  gap-2">
          <h4 className="text-white md:font-semibold  text-lg md:text-3xl">
            In this video, you will learn{" "}
          </h4>
          <div className="flex items-center">
            <h4 className="text-white md:font-semibold text-lg md:text-3xl">
              how this website works{" "}
            </h4>
            <FaRegLightbulb className="w-6 h-6 md:w-10 md:h-10 text-white hover:text-yellow-500 hover:animate-pulse" />
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:inline">
            <img
              src="/img/screen.png"
              alt="ScreenImage"
              className="w-[450px] object-contain"
            />
          </div>
          <div className="lg:absolute relative top-0 left-0 mb-2 lg:mb-0 lg:top-16 lg:left-5">
            <iframe
              // className="rounded-3xl"
              // width="415"
              // height="230"
              // width="100"
              // height="100"
              src="https://www.youtube.com/embed/lCUlyvf9xrs"
              title="Signal Tokens Introduction"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="lg:w-[415px] lg:h-[230px] rounded-sm"
            ></iframe>
          </div>
          <div class="flex justify-center items-center">
            <button
              onClick={handleRoute}
              className=" custom-button overflow-hidden relative group cursor-pointer border-2 font-semibold text-[15px] border-cyan-500 text-black hover:scale-105 duration-[700ms]"
            >
              <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-cyan-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-cyan-500 transition duration-[700ms] group-hover:text-white ease">
                <div className="flex items-center">
                  <div
                    class="bg-white p-1 rounded-full mr-4"
                    onClick={handleRoute}
                  >
                    <img
                      src="/img/telegram.png"
                      alt="ScreenImage"
                      class="w-6 h-6"
                    />
                  </div>
                  <span>Join our Telegram</span>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

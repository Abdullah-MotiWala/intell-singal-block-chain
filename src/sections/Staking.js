import { Link } from "react-scroll";

const Staking = () => {
  return (
    <>
      <div
        id="staking"
        className="flex flex-col justify-between items-center mt-5 lg:flex-row w-full min-h-screen"
        data-aos="fade-up"
    data-aos-anchor-placement="top-center"
      >
        <div className=" w-3/4 pt-7 lg:w-1/2 lg:pl-10 flex flex-col gap-4 justify-center">
          <h1 className="custom-main-heading md:text-[120px] lg:text-[160px] mb-4">
            <span className="text-white animate-pulse">STAKING</span>{" "}
          </h1>
          <h2 className="custom-sub-heading mb-7">
            Build the Future with Intell Signals
          </h2>
          <p className="custom-caption-text mb-5">
            Grow your crypto holdings with INSIG Staking – your path to passive
            income in the world of crypto
          </p>

          <div className="flex mt-5">
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this?.handleSetActive}
              className="custom-button overflow-hidden relative group cursor-pointer bg-[#474DFF]  hover:scale-105 duration-[700ms]"
            >
              <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-yellow-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
                Learn More
              </span>
            </Link>
          </div>
        </div>
        <div className="w-2/3 flex justify-center lg:pl-6 lg:w-1/2 py-8  ">
          <img
            className="w-8/12 h-auto rounded-xl hover:scale-95 transition duration-300 ease-in-out"
            src="/img/u2.png"
            alt="a"
          />
        </div>
      </div>
      {/* <div className="py-10 z-1 px-4 w-full max-w-6xl flex flex-col md:flex-row md:items-stretch items-center gap-x-12 gap-y-7">
        <div className="flex flex-col shadow-lg shadow-gray-100  bg-gr1 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in">
          <h3 className="text-gray-100 text-2xl font-semibold">
            BYE BYE GPU MINING
          </h3>
          <p className="text-gray-300">
            Mining Helium tokens with Hotspots is done via radio technology, not
            expensive or wasteful GPUs.
          </p>
        </div>
        <div className=" flex flex-col shadow-lg shadow-gray-100  bg-gr1 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in">
          <h3 className="text-gray-100 text-2xl font-semibold">
            Build Networks
          </h3>
          <p className="text-gray-300">
            Hotspots work together to form a new global wireless network and
            undertake 'Proof-of-Coverage'.
          </p>
        </div>
        <div className="flex flex-col shadow-lg shadow-gray-100  bg-gr1 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in">
          <h3 className="text-gray-100 text-2xl font-semibold">
            Choose your Hardware
          </h3>
          <p className="text-gray-300">
            Hotspots are built by a variety of vendors to suit your needs.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Staking;

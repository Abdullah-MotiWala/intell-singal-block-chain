import { Link } from "react-scroll";
const NetworkBanner = ({handleRoute}) => {
  return (
    // <div className='bg-gradient-to-b from-[#60efff] to-[#0061ff] w-full flex justify-center'>
    <div className="bg-gradient-to-b from-orange-400 to-red-500 w-full flex justify-center">
      <div className="py-10 px-4  w-full max-w-6xl flex flex-col lg:flex-row lg:items-start lg:justify-center items-center gap-x-12 gap-y-7">
        <div className="">
          <h3 className="text-black text-xl">NETWORK AT A GLANCE</h3>
        </div>
        <div className=" flex flex-col items-center">
          <h3 className="text-black text-xl">TOTAL HOTSPOTS</h3>
          <h4 className="text-black text-3xl font-semibold">949,377</h4>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-black text-xl">CIRCULATING HNT SUPPLY</h3>
          <h4 className="text-black text-3xl font-semibold">154,294,919</h4>
        </div>
        <div onClick={handleRoute} className=" py-3 custom-button ml-auto bg-gray-800 text-white shadow-lg   hover:bg-sk1 transition duration-300 ease-in-out">

            View Network Coverage
        </div>
      </div>
    </div>
  );
};

export default NetworkBanner;

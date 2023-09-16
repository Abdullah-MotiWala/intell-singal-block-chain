const DemandAppBanner = ({handleRoute}) => {
  return (
    <section id="damand" className="w-full">
      <div className="bg-gradient-to-b from-purple-400 to-purple-700 mt-6 w-full flex justify-center">
        <div className="py-12 px-12  w-full  flex flex-col lg:flex-row  items-center gap-y-8">
          <div className="flex flex-col">
            <h3 className="custom-mini-sub-heading opacity-100 text-white">
              Make your on demand app
            </h3>
            <h3 className="custom-mini-sub-heading opacity-100 text-white">
              The next <span className="text-orange-400">Success </span>
              <span className="text-red-500">Story</span>{" "}
            </h3>
          </div>
          <div className="lg:ml-auto">
            <button className="custom-button overflow-hidden relative group cursor-pointer font-semibold text-lg bg-gr  ">
              <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-white transition duration-[700ms] group-hover:text-black ease" onClick={handleRoute}>
                Get in Touch
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemandAppBanner;

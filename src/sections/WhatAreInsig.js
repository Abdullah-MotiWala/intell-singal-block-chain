const WhatAreInsig = () => {
  return (
    <div
      id="whatWeAre"
      className="flex flex-col  items-center mt-10 lg:flex-row  w-full  max-w-6xl min-h-screen"
    >
      <div className="w-2/3 flex justify-center lg:w-1/2 py-8 lg:pl-8">
        <img
          className="w-auto h-auto rounded-xl hover:scale-95 transition duration-300 ease-in-out"
          loading="lazy"
          src="/img/ab-img.png"
          alt="a"
        />
      </div>
      <div className=" w-3/4  py-8  lg:pl-8 lg:pr-6 flex flex-col gap-4 justify-center">
        <h1 className="mb-3 custom-mini-heading text-white leading-[4rem]">
          What are Intelligent{" "}
          <span className="text-orange-400 animate-pulse  ">Signals?</span>
        </h1>
        <p className="custom-caption-text ">
          The Intelligent Signals Token (INSIG) is the driving force behind an
          Artificial Intelligence (AI) based Visual Signalling (VST) system. The
          VST system utilises technical analysis techniques, specifically the
          GANN method, to analyse crypto charts and identify optimal market
          entry and exit points for trading cryptocurrencies. Created by
          experienced traders and software engineers with over 50 years of
          experience in financial markets, this system takes the guesswork out
          of trading. It employs a systematic approach using historical data to
          predict future market movements. The Intelligent Signals platform
          boasts a 70% success rate.
        </p>
      </div>
    </div>
  );
};

export default WhatAreInsig;

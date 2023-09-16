import React, { useState } from "react";
import TopBar from "../components/shared/TopBar";

const Plan = () => {
  const [isDiscountPlan, setIsDisountPlan] = useState(true);
  return (
    <div className="overflow-y-auto">
      <TopBar />
      <div className="flex  items-center justify-center mt-6 mb-2">
        <div
          class="flex items-center mb-4 mx-4 cursor-pointer"
          onClick={() => setIsDisountPlan(true)}
        >
          <input
            id="default-radio-1"
            type="radio"
            checked={isDiscountPlan}
            name="planType"
            class="w-4 h-4 
            text-orange-500 cursor-pointer bg-gray-100 border-gray-300 focus:ring-red-400 dark:focus:ring-red-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class="ml-2 cursor-pointer font-light text-gray-900 dark:text-gray-300"
          >
            Discounted Plan
          </label>
        </div>
        <div
          class="flex items-center mb-4 mx-4 cursor-pointer"
          onClick={() => {
            setIsDisountPlan(false);
          }}
        >
          <input
            name="planType"
            checked={!isDiscountPlan}
            type="radio"
            id="default-radio-2"
            class="w-4 h-4
             text-red-500 cursor-pointer bg-gray-100 border-gray-300 focus:ring-red-400 dark:focus:ring-red-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-2"
            class="ml-2 cursor-pointer font-light text-gray-900 dark:text-gray-300"
          >
            Regular Plan
          </label>
        </div>
      </div>

      {!isDiscountPlan && (
        <div>
          <div className="flex flex-col items-center w-full md:flex-row md:items-stretch md:justify-center gap-8">
            <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in mx-6">
              <div className="flex flex-col  w-full  mx-6  ">
                <p className="font-bold">Basic</p>
                <h3 className="text-white text-4xl font-bold ">Free</h3>
              </div>

              <div className="flex flex-col mx-6 pb-2 ">
                <div className="border-b py-5">
                  <p className="text-white">The perfect solution to try out</p>
                </div>
                <div className="border-b py-5">
                  <div className="flex">
                    <p className="text-white font-bold">Number of days</p>
                    <p className="text-white ml-auto font-semibold">1</p>
                  </div>
                  <div className="flex">
                    <p className="text-white font-semibold">
                      Number of Signals
                    </p>
                    <p className="text-white ml-auto font-bold">1</p>
                  </div>
                </div>
                <div className="py-5">
                  <ul className="list-none list-outside text-white text-sm">
                    <li>1 Free Signal per day</li>
                    <li>
                      Perfect for beginners and those looking to dip their toes
                      into crypto trading.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto  flex justify-center">
                <button className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">
              <div className="flex flex-col  w-full  mx-6  ">
                <p className="font-bold">Premium / Month</p>
                <div className="flex flex-row ">
                  <h3 className="text-white text-4xl font-bold ">$49 </h3>{" "}
                </div>
              </div>
              <div className="flex flex-col mx-6 pb-2 ">
                <div className="border-b py-5">
                  <p className="text-white">The perfect solution to try out</p>
                </div>
                <div className="border-b py-5">
                  <div className="flex">
                    <p className="text-white font-bold">Number of days</p>
                    <p className="text-white ml-auto font-semibold">30</p>
                  </div>
                  <div className="flex">
                    <p className="text-white font-semibold">
                      Number of Signals
                    </p>
                    <p className="text-white ml-auto font-bold">150</p>
                  </div>
                </div>
                <div className="py-5">
                  <ul className="list-none list-outside text-white text-sm ">
                    <li>5 Signals per day</li>
                    <li>Access to Premium signals</li>
                    <li>Opportunity to diversify your portfolio</li>
                    <li>
                      Ideal for traders seeking more signals and a competitive
                      edge.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto  flex justify-center">
                <button className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">
              <div className="flex flex-col  w-full  mx-6  ">
                <p className="font-bold">VIP / Month</p>
                <div className="flex flex-row ">
                  <h3 className="text-white text-4xl font-bold ">$99 </h3>{" "}
                </div>
              </div>

              <div className="flex flex-col mx-6 pb-2 ">
                <div className="border-b py-5">
                  <p className="text-white">The perfect solution to try out</p>
                </div>
                <div className="border-b py-5">
                  <div className="flex">
                    <p className="text-white font-bold">Number of days</p>
                    <p className="text-white ml-auto font-semibold">30</p>
                  </div>
                  <div className="flex">
                    <p className="text-white font-semibold">
                      Number of Signals
                    </p>
                    <p className="text-white ml-auto font-bold">Unlimited</p>
                  </div>
                </div>
                <div className="pt-5">
                  <ul className="list-none list-outside text-white text-sm">
                    <li>Unlimited Signals</li>
                    <li>One-to-One Coaching (up to 1 hour)</li>
                    <li>Custom Crypto Research Reports on Demand</li>
                    <li>
                      For serious traders wanting maximum insights, personalized
                      guidance, and research expertise.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto  flex justify-center">
                <button className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isDiscountPlan && (
        <div className="flex py-6 flex-col items-center w-full md:flex-row md:items-stretch md:justify-center gap-8">
          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">
            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">Premium / 3 Month</p>
              <div className="flex flex-row ">
                <h3 className="text-white text-4xl font-bold ">$129 </h3>{" "}
              </div>
            </div>

            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">The perfect solution to try out</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">30</p>
                </div>
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">150</p>
                </div>
              </div>
              <div className="py-5">
                <ul className="list-none list-outside text-white text-sm">
                  <li>All benefits of Monthly Premium package</li>
                  <li>Discounted rate for 3 months</li>
                  <li>
                    A cost-effective choice for extended premium access and
                    savings.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">
            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">VIP / 3 Month</p>
              <div className="flex flex-row ">
                <h3 className="text-white text-4xl font-bold ">$249 </h3>{" "}
              </div>
            </div>

            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">The perfect solution to try out</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">30</p>
                </div>
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">Unlimited</p>
                </div>
              </div>
              <div className="py-5">
                <ul className="list-none list-outside text-white text-sm ">
                  <li>All benefits of Monthly VIP package</li>
                  <li>Discounted rate for 3 months</li>
                  <li>
                    Premium features at a reduced rate for traders committed to
                    growth.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plan;

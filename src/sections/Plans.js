import { useState } from "react";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract
} from "@wagmi/core";
import { useAccount } from "wagmi";
import {
  IntellSignals_Abi,
  IntellSignals_address,
  Token_Abi,
  Token_Address
} from "../utils/Contract";
import Web3 from "web3";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { setPlan, setUser } from "../store/user";
import { ALL_PACKAGES } from "../utils/contants";
import * as Swal from "sweetalert2";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";

const Plans = () => {
  const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [spinner, setspinner] = useState(false);
  const [plan_data, setplan_data] = useState(0);
  const { address } = useAccount();

  const associatePlanToUser = async (plan_id) => {
    const body = { plan_id };
    const response = await api("purchase-plan", "PUT", body, token);
    if (response.success) {
      dispatch(setPlan(plan_id));
      navigate("/panel/dashboard");
    }
  };

  const webSupply = new Web3("https://bsc-testnet.publicnode.com");
  const buyPackage = async (plan, amount) => {
    if (!token) {
      toast.error("Please login to proceed further");
      navigate("/login");
      return;
    }
    const result = await Swal.fire({
      title: "Do you have INSIG token",
      showDenyButton: true,
      denyButtonText: "No, I don't have",
      confirmButtonText: "Yes, I have",
      color: "rgba(249 115 22)"
    });
    if (result.isDenied) {
      window.open("https://www.coinstore.com/#/spot/INSIGUSDT");
      return;
    }
    if (result.isDismissed) {
      return;
    }

    try {
      if (address) {
        // console.log("amount", webSupply);
        if (plan == 0) {
          setspinner(true);
          const { request } = await prepareWriteContract({
            address: Token_Address,
            abi: Token_Abi,
            functionName: "approve",
            args: [IntellSignals_address, amount * 1000000000000000000],
            account: address
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash
          });
          toast.success("First transaction successfully Compeleted");
          setspinner(false);

          setTimeout(async () => {
            setspinner(true);

            const { request } = await prepareWriteContract({
              address: IntellSignals_address,
              abi: IntellSignals_Abi,
              functionName: "BuyPackage",
              args: [plan, amount * 1000000000000000000],
              account: address
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash
            });
            await associatePlanToUser(0);
            toast.success("Great! You've successfully Buy Package🎉");
            setspinner(false);
          }, 2000);
        } else if (plan == 1) {
          console.log("yes i clicked");
          setspinner(true);

          const { request } = await prepareWriteContract({
            address: Token_Address,
            abi: Token_Abi,
            functionName: "approve",
            args: [IntellSignals_address, amount * 1000000000000000000],
            account: address
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash
          });
          toast.success("First transaction successfully Compeleted");

          setTimeout(async () => {
            setspinner(true);

            const { request } = await prepareWriteContract({
              address: IntellSignals_address,
              abi: IntellSignals_Abi,
              functionName: "BuyPackage",
              args: [plan, amount * 1000000000000000000],
              account: address
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash
            });
            await associatePlanToUser(1);
            toast.success("Great! You've successfully Buy Package🎉");
            setspinner(false);
          }, 2000);
        } else if (plan == 2) {
          setspinner(true);

          const { request } = await prepareWriteContract({
            address: Token_Address,
            abi: Token_Abi,
            functionName: "approve",
            args: [IntellSignals_address, amount * 1000000000000000000],
            account: address
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash
          });
          toast.success("First transaction successfully Compeleted");

          setTimeout(async () => {
            const { request } = await prepareWriteContract({
              address: IntellSignals_address,
              abi: IntellSignals_Abi,
              functionName: "BuyPackage",
              args: [plan, amount * 1000000000000000000],
              account: address
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash
            });
            await associatePlanToUser(2);
            toast.success("Great! You've successfully Buy Package🎉");
            setspinner(false);
          }, 2000);
        } else if (plan == 3) {
          setspinner(true);

          const { request } = await prepareWriteContract({
            address: Token_Address,
            abi: Token_Abi,
            functionName: "approve",
            args: [IntellSignals_address, amount * 1000000000000000000],
            account: address
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash
          });
          toast.success("First transaction successfully Compeleted");

          setTimeout(async () => {
            const { request } = await prepareWriteContract({
              address: IntellSignals_address,
              abi: IntellSignals_Abi,
              functionName: "BuyPackage",
              args: [plan, amount * 1000000000000000000],
              account: address
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash
            });
            await associatePlanToUser(3);
            toast.success("Great! You've successfully Buy Package🎉");
            setspinner(false);
          }, 2000);
        } else {
          setspinner(true);

          const { request } = await prepareWriteContract({
            address: Token_Address,
            abi: Token_Abi,
            functionName: "approve",
            args: [IntellSignals_address, amount * 1000000000000000000],
            account: address
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash
          });
          toast.success("First transaction successfully Compeleted");

          setTimeout(async () => {
            const { request } = await prepareWriteContract({
              address: IntellSignals_address,
              abi: IntellSignals_Abi,
              functionName: "BuyPackage",
              args: [plan, amount * 1000000000000000000],
              account: address
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash
            });
            await associatePlanToUser(4);
            toast.success("Great! You've successfully Buy Package🎉");
            setspinner(false);
          }, 2000);
        }
      } else {
        toast.error("Please Connect Wallet First! ");
        setspinner(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setspinner(false);
    }
  };
  return (
    <div
      className=" flex flex-col bg-gray-200 items-center py-8  w-full "
      id="specialoffers"
    >
      <h2 className="custom-mini-heading mb-3">Pricing</h2>
      <h3 className="custom-caption-text text-center w-4/5 lg:w-auto text-gray-700">
        You can start with a free trial or subscribe to Premium or VIP Package
      </h3>
      <div className="w-full py-4 flex flex-col items-center">
        <h2 className="cursor-pointer custom-mini-sub-heading text-gray-800 opacity-100 hover:delay-500  hover:underline  hover:underline-offset-8  hover:decoration-2 transition-all duration-500">
          Regular Rates
        </h2>
        <div className="flex py-6 flex-col items-center w-full md:flex-row md:items-stretch md:justify-center gap-8">
          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in mx-6">
            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">{ALL_PACKAGES[0].type}</p>
              <h3 className="text-white text-4xl font-bold ">
                {ALL_PACKAGES[0].price}
              </h3>
            </div>

            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">{ALL_PACKAGES[0].description}</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">
                    {ALL_PACKAGES[0].numOfSignals}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">
                    {ALL_PACKAGES[0].numOfDays}
                  </p>
                </div>
              </div>
              <div className="py-5">
                <ul className="list-none list-outside text-white text-sm">
                  {ALL_PACKAGES[0].features.map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button
                className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
                onClick={() => (buyPackage(0, 0), setplan_data(0))}
              >
                {plan_data == 0
                  ? spinner
                    ? "Loading..."
                    : "Buy Now"
                  : "Buy Now"}
              </button>
            </div>
          </div>

          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">
            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">{`${ALL_PACKAGES[1].type} / ${ALL_PACKAGES[1].name}`}</p>
              <div className="flex flex-row ">
                <h3 className="text-white text-4xl font-bold ">
                  {`$${ALL_PACKAGES[1].price}`}{" "}
                </h3>{" "}
              </div>
            </div>
            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">{ALL_PACKAGES[1].description}</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">
                    {ALL_PACKAGES[1].numOfSignals}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">
                    {ALL_PACKAGES[1].numOfDays}
                  </p>
                </div>
              </div>
              <div className="py-5">
                <ul className="list-none list-outside text-white text-sm ">
                  {ALL_PACKAGES[1].features.map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button
                className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
                onClick={() => (buyPackage(1, 10), setplan_data(1))}
              >
                {plan_data == 1
                  ? spinner
                    ? "Loading..."
                    : "Buy Now"
                  : "Buy Now"}
              </button>
            </div>
          </div>

          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">
            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">
                {`${ALL_PACKAGES[2].price} / ${ALL_PACKAGES[2].name}`}
              </p>
              <div className="flex flex-row ">
                <h3 className="text-white text-4xl font-bold ">
                  {`$${ALL_PACKAGES[2].price}`}
                </h3>{" "}
              </div>
            </div>

            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">{ALL_PACKAGES[2].description}</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">
                    {ALL_PACKAGES[2].numOfSignals ?? "Unlimited"}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">
                    {ALL_PACKAGES[2].numOfDays}
                  </p>
                </div>
              </div>
              <div className="pt-5">
                <ul className="list-none list-outside text-white text-sm">
                  {ALL_PACKAGES[2].features.map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button
                className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
                onClick={() => (buyPackage(2, 100), setplan_data(2))}
              >
                {plan_data == 2
                  ? spinner
                    ? "Loading..."
                    : "Buy Now"
                  : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-4 flex flex-col items-center">
        <h2 className=" font-bold text-black flex flex-col justify-center text-center">
          <div className="mb-2 cursor-pointer custom-mini-sub-heading text-gray-800 opacity-100  hover:delay-500  hover:underline  hover:underline-offset-8 hover:decoration-2 transition-all duration-500">
            {" "}
            Discounted Rates
          </div>
          <div className="text-3xl text-gray-700 font-normal">
            3 Months Subscription
          </div>
        </h2>
        <div className="flex py-6 flex-col items-center w-full md:flex-row md:items-stretch md:justify-center gap-8">
          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">
            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">{`${ALL_PACKAGES[3].type} / ${ALL_PACKAGES[3].name}`}</p>
              <div className="flex flex-row ">
                <h3 className="text-white text-4xl font-bold ">
                  {`$${ALL_PACKAGES[3].price}`}
                </h3>{" "}
              </div>
            </div>

            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">{ALL_PACKAGES[3].description}</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">
                    {ALL_PACKAGES[3].numOfSignals}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">
                    {ALL_PACKAGES[3].numOfDays}
                  </p>
                </div>
              </div>
              <div className="py-5">
                <ul className="list-none list-outside text-white text-sm">
                  {ALL_PACKAGES[3].features.map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button
                className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
                onClick={() => (buyPackage(3, 15), setplan_data(3))}
              >
                {plan_data == 3
                  ? spinner
                    ? "Loading..."
                    : "Buy Now"
                  : "Buy Now"}
              </button>
            </div>
          </div>
          <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in">
            <div className="flex flex-col  w-full  mx-6  ">
              <p className="font-bold">{`${ALL_PACKAGES[4].type} / ${ALL_PACKAGES[4].name}`}</p>
              <div className="flex flex-row ">
                <h3 className="text-white text-4xl font-bold ">
                  ${ALL_PACKAGES[4].price}{" "}
                </h3>{" "}
              </div>
            </div>

            <div className="flex flex-col mx-6 pb-2 ">
              <div className="border-b py-5">
                <p className="text-white">{ALL_PACKAGES[4].description}</p>
              </div>
              <div className="border-b py-5">
                <div className="flex">
                  <p className="text-white font-semibold">Number of Signals</p>
                  <p className="text-white ml-auto font-bold">
                    {ALL_PACKAGES[4].numOfSignals ?? "Unlimited"}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-white font-bold">Number of days</p>
                  <p className="text-white ml-auto font-semibold">
                    {ALL_PACKAGES[4].numOfDays}
                  </p>
                </div>
              </div>
              <div className="py-5">
                <ul className="list-none list-outside text-white text-sm ">
                  {ALL_PACKAGES[4].features.map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-auto  flex justify-center">
              <button
                className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
                onClick={() => (buyPackage(4, 20), setplan_data(4))}
              >
                {plan_data == 4
                  ? spinner
                    ? "Loading..."
                    : "Buy Now"
                  : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;

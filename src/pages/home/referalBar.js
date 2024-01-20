import React from "react";
import Button from "../../components/commons/button";
import { backgroundLinesOne, logo } from "../../assets/images";
import { ArrowDownIcon, InfoIcon } from "../../assets/icons";

export default function ReferalBar(props) {
    const currentCoin = 'Arbitrum'
    const Icontent = [
        {
            title: "Across Referral Rewards",
            value: "-"
        },
        {
            title: `Time to ${currentCoin} `,
            value: "-"
        },
        {
            title: `${<ArrowDownIcon />} Net fee ${<ArrowDownIcon />}`,
            value: "-"
        },
        {
            title: "You will receive",
            value: "-"
        },
    ]
    return (
        <div className="bg-[#34353B] border border-zinc-700 rounded-xl mb-16 mt-8">
            <div className="w-[91%] m-auto py-6">
                <section style={{ backgroundImage: `url(${backgroundLinesOne})`, backgroundRepeat: "no-repeat" }} className="border rounded-xl border-[#3A4B4C] px-4 py-6 flex justify-between items-center">
                    <div className="flex w-[70%] items-center gap-3">
                        <div className="border rounded-full border-[#3A4B4C] p-2">
                            <img src={logo} alt="logo" className="w-[35px]" />
                        </div>
                        <div>
                            <h4 className="text-white">Earn up to <span className=" text-primGreen">80%</span> in ACX Rewards</h4>
                            <div className="text-[14px] text-zinc-400">
                                Share your unique referral link and earn on every transaction made with your link.
                            </div>
                        </div>
                    </div>
                    <button
                        // onClick={onClick}
                        className="border rounded-full px-5 text-primGreen border-[#3A4B4C] font-semibold py-[7px]"
                    >
                        {"Connect"}
                    </button>
                </section>

                <div className=" flex justify-between text-zinc-400 py-4 items-center">
                    <div>Across Referal Rewards</div>
                    <div className="flex items-center w-[60px] justify-between border-[#3A4B4C] px-3 py-1 border rounded-full">
                        <img src={logo} alt="logo" className="w-[17px] opacity-50" />
                        <div className="text-zinc-500">-</div>
                    </div>
                </div>

                <div className=" flex justify-between text-zinc-400 py-4 items-center">
                    <div>Time to <span className="text-white">Arbitrum</span></div>
                    <div>-</div>
                </div>

                <div className=" flex justify-between text-zinc-400 py-4 items-center">
                    <div className="flex items-center gap-2">
                        <ArrowDownIcon />
                        Net fee
                        <InfoIcon className=" cursor-pointer" />
                    </div>
                    <div>-</div>
                </div>
                <div className=" flex justify-between text-zinc-400 py-4 items-center">
                    <div>You will receive</div>
                    <div>-</div>
                </div>

                <button
                    // onClick={onClick}
                    className=" text-lg rounded-full w-full hover:bg-[#5EC8B1] px-6 text-[#2F3035] bg-primGreen font-semibold py-5">
                    {"Connect wallet"}
                </button>
            </div>
        </div>
    )
}
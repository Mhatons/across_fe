import React from "react";
import { ArrowDownIcon, ArrowSwapIcon, CardBoardIcon } from "../../assets/icons";
import { logo } from "../../assets/images";
import CustomSelect from "../../components/commons/select";

export default function SendBridgeBar() {
    const options = [
        {
            label: (
                <div>
                    <CardBoardIcon />
                    <p>ETH</p>
                </div>
            ),
            value: 'eth',
        },
        // Add more options as needed
    ];
    return (
        <div className="bg-[#34353B] border border-zinc-700 rounded-xl mt-8">
            <div className="w-[90%] pt-6 pb-12 m-auto">
                <section>
                    <p className="text-zinc-400 text-sm mb-3">Send</p>
                    <div className="flex justify-between ">
                        <div className="border bg-[#2D2E33] flex items-center justify-between w-[67%] rounded-full border-zinc-600 p-4">
                            <input src="" className="bg-transparent text-md" placeholder="Enter amount" />
                            <button
                                // onClick={onClick}
                                className="border text-[10px] tracking-widest rounded-2xl px-3 text-zinc-300 border-zinc-600 font-semibold py-[4px]"
                            >
                                MAX
                            </button>
                        </div>

                        <div className="border text-zinc-400 w-[30%] bg-[#2D2E33] flex items-center justify-between rounded-full border-zinc-600 p-4">
                            <div className=" flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <CardBoardIcon />
                                    <p>ETH</p>
                                </div>
                                <ArrowDownIcon />
                            </div>
                        </div>
                    </div>
                </section>

                <div className=" relative">
                    <section className="mt-6">
                        <p className="text-zinc-400 text-sm mb-3">From</p>
                        <div className="border text-zinc-400 w-full bg-[#2D2E33] flex items-center justify-between rounded-full border-zinc-600 p-4">
                            <div className=" flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <CardBoardIcon />
                                    <p>Ethereum Mainnet</p>
                                </div>
                                <ArrowDownIcon />
                            </div>
                        </div>
                    </section>

                    <section className="mt-6">
                        <p className="text-zinc-400 text-sm mb-3">To</p>
                        <div className="border text-zinc-400 w-full bg-[#2D2E33] flex items-center justify-between rounded-full border-zinc-600 p-4">
                            <div className=" flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <CardBoardIcon />
                                    <p>Arbitrum One</p>
                                </div>
                                <ArrowDownIcon />
                            </div>
                        </div>
                        <span className=" float-right text-sm text-zinc-400">Change account</span>
                    </section>

                    <div className=" absolute top-[50%] right-[50%] hover:border-zinc-200 hover:text-zinc-200 cursor-pointer border-zinc-500 border rounded-full p-2 text-zinc-500">
                        <ArrowSwapIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
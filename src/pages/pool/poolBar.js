import React, { useState } from "react";
import Button from "../../components/commons/button";
import { backgroundLinesOne, logo } from "../../assets/images";
import { ArrowDownIcon, InfoIcon, LogoDummy, OutlinedArrowRight } from "../../assets/icons";
import CustomSelect from "../../components/commons/select";
import { useNavigate } from "react-router-dom";

export default function PoolBar(props) {
    const [isAdd, setIsAdd] = useState(true)
    const navigate = useNavigate()

    const poolDetails = [
        {
            title: "Pool size",
            sum: "17,815.221 ETH"
        },
        {
            title: "Pool utilization",
            sum: "12.842%"
        },
        {
            title: "Pool APY",
            sum: "3.284%"
        },
    ]

    return (
        <div className="bg-[#34353B] border border-zinc-700 rounded-xl mb-16 mt-8">
            <div className="w-[91%] m-auto py-6">
                <section className="flex items-center mb-6">
                    <div onClick={() => setIsAdd(true)} className={`w-[50%]  border-b text-center pb-4 ${isAdd ? "border-white border-b-2 text-white " : "text-zinc-400"} cursor-pointer border-zinc-600`}>Add</div>
                    <div onClick={() => setIsAdd(false)} className={`w-[50%] border-b text-center pb-4 ${!isAdd ? "border-white border-b-2 text-white " : "text-zinc-400"} cursor-pointer border-zinc-600`}>Remove</div>
                </section>
                <CustomSelect coin="ETH Pool" />

                <section className="pt-6 flex justify-between items-center">
                    {
                        poolDetails.map((pool, index) => (
                            <div key={index} className="border border-zinc-700 w-[30%] rounded-xl px-4 py-3 ">
                                <header className="text-zinc-400">{pool.title}</header>
                                <p className="text-zinc-300">{pool.sum}</p>
                            </div>
                        ))
                    }
                </section>

                <div className=" flex justify-between text-zinc-400 py-4 items-center">
                    <div>Position size</div>
                    <div className="flex items-center gap-2 justify-between">
                        <div className="text-zinc-500">-</div>
                        <img src={logo} alt="logo" className="w-[17px] opacity-50" />
                    </div>
                </div>

                <div className=" flex border-b border-zinc-700 justify-between text-zinc-400 py-3 items-center">
                    <div>Fees earned</div>
                    <div className="flex items-center gap-2 justify-between">
                        <div className="text-zinc-500">-</div>
                        <img src={logo} alt="logo" className="w-[17px] opacity-50" />
                    </div>
                </div>

                <div className={`border text-zinc-400 w-full ${isAdd ? "bg-[#373F43] border-[#3F5B59]" : "bg-[#3E3D3E] border-[#5A5345]"}  mb-6 flex items-center justify-between rounded-2xl p-4`}>
                    <div className=" flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                            <LogoDummy className={`text-4xl ${isAdd ? "text-primGreen" : "text-[#f9d26c]"}`} />
                            <div className="text-white">
                                Earn 
                                <span className={`${isAdd ? "text-primGreen" : "text-[#f9d26c]"}`}> +7.552% </span>
                                 by staking 
                                 <span className={`${isAdd ? "text-primGreen" : "text-[#f9d26c]"}`}> ETH-LP </span>
                            </div>
                        </div>
                        <OutlinedArrowRight onClick={() => navigate("/rewards")} className={`text-4xl border rounded-full p-2 cursor-pointer ${isAdd ? "text-primGreen border-primGreen" : "border-[#f9d26c] text-[#f9d26c]"} `} />
                    </div>
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
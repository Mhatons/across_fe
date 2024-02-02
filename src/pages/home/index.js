import React from "react";
import { ArrowUpIcon } from "../../assets/icons";
import { IoShieldCheckmarkOutline, IoDiamondOutline, IoFlashOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { backgroundLinesOne } from "../../assets/images";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    const Icontent_one = [
        {
            rate: "$4.7B+",
            desc: "Total Volume"
        },
        {
            rate: "2M+",
            desc: "Total Transactions"
        },
        {
            rate: "1 min",
            desc: "Average Fill Time"
        },
        {
            rate: "< $1",
            desc: "To Bridge 1 ETH"
        },
    ]

    const Icontent_two = [
        {
            icon: <IoShieldCheckmarkOutline />,
            title: "safe",
            desc: "The optimistic design means that no matter how many people are participating in the bridge, it only takes one single honest actor to dispute a false claim."
        },
        {
            icon: <IoFlashOutline />,
            title: "fast",
            desc: "Defi protocol is able to offer extremely fast bridging. Today, that means bridging under 1 minute on average. In the future, next-block bridging will be possible."
        },
        {
            icon: <SlPeople />,
            title: "growing",
            desc: "There are many ways to become a part of this mission, earn ACX rewards, and help guide the direction of the Defi protocol DAO. The place to start is in the community."
        },
        {
            icon: <IoDiamondOutline />,
            title: "Capital Efficient",
            desc: "Higher capital efficiency means lower costs and fewer funds at risk. Defi protocol was built with the thesis that capital efficiency is the single most important measure of a cross-chain bridge."
        },
    ]
    return (
        <div className="">
            <div className=" w-[90%] m-auto pb-8 pt-4 text-center ">
                <header className=" lg:text-[70px] mdd:text-[40px] text-[30px]">
                    <p className="text-white">The Bridge</p>
                    <p className="homeText">Ethereum Deserves</p>
                </header>
                <div className="smm:w-[400px] m-auto text-zinc-300 pt-4">
                    Defi protocol is a cross-chain bridge for L2s and rollups secured by UMA's optimistic oracle.
                </div>
                <div className="flex items-center justify-center pt-12">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate("/bridge")}
                            className=" homeBtn shadow-lg rounded-full mdd:py-5 flex justify-center items-center max-mdd:h-10 py-2 px-3 mdd:px-10 text-[#2D2E33] font-semibold"
                        >
                            {"Go to Bridge"}
                        </button>
                        <button
                            // onClick={() => setWalletModal(true)}
                            className=" flex gap-2 items-center rounded-full px-6 text-zinc-300 py-[7px]"
                        >
                            {"Read docs"} <ArrowUpIcon />
                        </button>
                    </div>
                </div>
                <div className="grid mdd:grid-cols-4 gap-4 grid-cols-2 pt-20 w-[700px] max-[737px]:w-full m-auto">
                    {
                        Icontent_one.map((content, index) => (
                            <div key={index} className="text-center">
                                <h4 className="text-zinc-300 smm:text-[40px] text-[30px]">{content.rate}</h4>
                                <div className="text-zinc-400 smm:whitespace-nowrap">{content.desc}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="grid mdd:grid-cols-2 text-left gap-6 pt-8">
                    {
                        Icontent_two.map((content, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundImage: `url(${backgroundLinesOne})`,
                                    backgroundRepeat: "no-repeat",
                                }}
                                className="border border-zinc-700 hover:shadow-2xl p-6 rounded-xl bg-[#2C2D32]">
                                <header className="flex items-center gap-3 text-[20px] font-semibold">
                                    <div
                                        className="text-[30px] text-primGreen">
                                        {content.icon}
                                    </div>
                                    <h4 className="text-zinc-300 capitalize">{content.title}</h4>
                                </header>
                                <div className="text-zinc-300 mdd:text-[17.5px] text-[16px] pt-3">
                                    {content.desc}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
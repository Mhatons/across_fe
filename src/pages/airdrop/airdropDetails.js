import React, { useContext } from "react";
import { ArrowLeftIcon, ArrowSwapIcon } from "../../assets/icons";
import { logo } from "../../assets/images";
import { myContext } from "../../MyContext";

export default function AirdropDetails() {
    const { setCurrentPage } = useContext(myContext)

    const details = [
        {
            icon: <ArrowSwapIcon />,
            iconColor: "#5865F2",
            title: "Community Member",
            volume: "20,000,000",
            desc: "Community members who have meaningfully contributed to Across prior to the community snapshot (September 1, 2022). This includes a discord role-based allocation as well as a bonus allocation for many community members who went above and beyond."
        },
        {
            icon: <ArrowSwapIcon />,
            iconColor: "#E36D3A",
            title: "Bridge Travel Program",
            volume: "10,000,000",
            desc: "Active bridge users identified by the Bridge Traveler program who have not used Across prior to September 1, 2022. These users need to complete a bridge transfer on Across ahead of the ACX token launch to become eligible. The amount of ACX committed to this program is 10MM. Users who complete a bridge transfer will share these tokens with some allocation variability depending on past bridge activity."
        },
        {
            icon: <ArrowSwapIcon />,
            iconColor: "#6F2BFF",
            title: "Early Bridge User",
            volume: "15,000,000",
            desc: "Users who bridged assets before the Across Referral Program (July 18th, 2022). These tokens will be allocated to wallets pro-rata by the volume of transfer completed. A minimum transfer amount is required and a maximum airdrop size will be applied."
        },
        {
            icon: <ArrowSwapIcon />,
            iconColor: "#6CF9D8",
            title: "Liquidity Provider",
            volume: "70,000,000",
            desc: "Liquidity providers who pool ETH, USDC, WBTC or DAI into the Across protocol before the token launch. The amount of rewards to LPs are pro-rated by size and a fixed amount of tokens will be emitted at each block since the inception of the protocol."
        },
    ]
    return (
        <div className=" mdd:w-[85%] w-[90%] m-auto text-zinc-200 lg:flex items-center justify-between ">
            <div className="lg:w-[45%] mdd:w-[450px]">
                <div onClick={() => setCurrentPage(false)} className="flex gap-2 items-center cursor-pointer text-[20px]">
                    <ArrowLeftIcon />
                    <span>Back</span>
                </div>
                <div className="mdd:pt-10 pt-5">
                    <header className="mdd:text-[31px] text-[25px]">Airdrop details</header>
                    <div className="text-zinc-300 max-mdd:text-[13.5px] mdd:pt-5 pt-3">A total of 1,000,000,000 $ACX will be minted at inception and 125,000,000 $ACX will be distributed through an airdrop to users who have contributed to Across.</div>
                </div>
            </div>
            <div className="lg:w-[55%] lg:h-[350px] hideScrollBar lg:overflow-y-scroll m-auto">
                {
                    details.map((airdrop, index) => (
                        <div key={index} className="bg-[#2D2E33] mb-6 rounded-xl shadow-2xl mdd:p-8 p-6">
                            <header className="mdd:flex items-center gap-8">
                                <div style={{backgroundColor: airdrop.iconColor}} className={`h-14 ${airdrop.iconColor === "#6CF9D8" ? "text-black" : ""} w-14 text-lg rounded-full flex justify-center items-center`}>
                                    {airdrop.icon}
                                </div>
                                <div>
                                    <h4 className="mdd:text-[21px] max-mdd:pt-5 text-[18px]">{airdrop.title}</h4>
                                    <div className="flex items-center gap-2">
                                        <img src={logo} alt="icon" className="w-[17px]" />
                                        <span className=" text-primGreen"> {airdrop.volume} $ACX</span>
                                    </div>
                                </div>
                            </header>
                            <div className="bg-[#3E4047] p-4 rounded-xl mdd:text-sm text-[12px] text-zinc-300 mt-8 mdd:leading-5 leading-4">
                                {airdrop.desc}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
import React, { useContext, useState } from "react";
import { ethLogo, logo } from "../../assets/images";
import { ArrowDownIcon, InfoIcon, LogoDummy, OutlinedArrowRight } from "../../assets/icons";
import CustomSelect from "../../components/commons/select";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../MyContext";
import { Box, Typography } from "@mui/material";
import { poolCoins, wallets } from "../../utils/wallets";
import CustomModal from "../../utils/modal";

export default function PoolBar() {
    const [isAdd, setIsAdd] = useState(true)
    const [poolCoin, setPoolCoin] = useState({ logo: ethLogo, name: "ETH" })
    const navigate = useNavigate()
    const { setWalletModal, setOpenModal } = useContext(myContext)

    const poolDetails = [
        {
            title: "Pool size",
            sum: `17,815.221 ${poolCoin.name}`
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
        <div className="bg-[#34353B] border border-zinc-700 rounded-xl mt-8">
            <div className="w-[91%] m-auto py-6">
                <section className="flex items-center mb-6">
                    <div onClick={() => setIsAdd(true)} className={`w-[50%]  border-b text-center pb-4 ${isAdd ? "border-zinc-100 border-b-2 text-white " : "text-zinc-400 border-zinc-700"} cursor-pointer `}>Add</div>
                    <div onClick={() => setIsAdd(false)} className={`w-[50%] border-b text-center pb-4 ${!isAdd ? "border-white border-b-2 text-white " : "text-zinc-400 border-zinc-700"} cursor-pointer `}>Remove</div>
                </section>

                <div
                    onClick={() => setOpenModal(true)}
                    className="border smm:text-sm cursor-pointer text-zinc-300 w-full bg-[#2D2E33] flex items-center justify-between rounded-full border-zinc-600 mdd:p-4 p-3">
                    <div className=" flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                            <img src={poolCoin.logo} alt="" className="w-[23px]" />
                            <p>{poolCoin.name} Pool</p>
                        </div>
                        <ArrowDownIcon />
                    </div>
                </div>

                <section className="pt-6 mdd:flex justify-between items-center">
                    {
                        poolDetails.map((pool, index) => (
                            <div key={index} className="border border-zinc-700 mdd:w-[30%] max-mdd:mb-3 max-mdd:text-sm rounded-xl px-4 py-3 ">
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
                        <img src={poolCoin.logo} alt="logo" className="w-[17px] " />
                    </div>
                </div>

                <div className=" flex border-b border-zinc-700 justify-between text-zinc-400 py-3 items-center">
                    <div>Fees earned</div>
                    <div className="flex items-center gap-2 justify-between">
                        <div className="text-zinc-500">-</div>
                        <img src={poolCoin.logo} alt="logo" className="w-[17px] " />
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
                    onClick={() => setWalletModal(true)}
                    className=" text-lg rounded-full w-full hover:bg-[#5EC8B1] px-6 text-[#2F3035] bg-primGreen font-semibold py-5">
                    {"Connect wallet"}
                </button>
            </div>
            {
                <CustomModal
                    title="Pools"
                >
                    {
                        poolCoins?.map((wallet, index) => (
                            <Box onClick={() => {
                                setPoolCoin({ poolCoin, logo: wallet.logo, name: wallet.name });
                                setOpenModal(false)
                            }}
                                key={index}
                                className={`flex ${poolCoin.name === wallet.name ? "bg-[#2D2E33]" : ""} items-center justify-between p-4 hover:bg-[#2D2E33] cursor-pointer`}
                            >
                                <Box className="flex items-center gap-3">
                                    <img src={wallet.logo} alt='' className='w-[25px]' />
                                    <Typography className='text-white'>
                                        {wallet.name} Pool
                                    </Typography>
                                </Box>
                                {
                                    poolCoin.name === wallet.name ? (
                                        <Typography className='border border-[#44D2FF] w-[16px] h-[16px] rounded-full flex justify-center items-center'>
                                            <Typography className=' w-2 h-2 bg-[#44D2FF] rounded-full'></Typography>
                                        </Typography>
                                    ) : (
                                        <Typography className='border w-[17px] h-[17px] rounded-full'></Typography>
                                    )
                                }

                            </Box>
                        ))
                    }
                </CustomModal>
            }
        </div>
    )
}
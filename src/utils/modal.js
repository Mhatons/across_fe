import React, { useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { CloseButton } from '../assets/icons';
import { myContext } from '../MyContext';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: "400px",
    transform: 'translate(-50%, -50%)',
    // width: 400,
    borderRadius: "15px",
    marginTop: "2.5em",
    bgcolor: '#202024',
    border: '1px solid #4C4E57',
    outline: "none",
    boxShadow: 24,
    overFlowX: "hidden"
};

export const styleHeader = {
    borderBottom: '1px solid #4C4E57',
    p: 2,
    color: "rgb(161 161 170)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

export default function CustomModal(props) {
    const { title, children } = props;
    const { openModal, setOpenModal } = useContext(myContext)
    const handleClose = () => setOpenModal(false);


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={openModal}>
                <Box className=" smm:w-[400px] w-[90%] m-auto" sx={style}>
                    <Box sx={styleHeader}>
                        <Typography> {title} </Typography>
                        <CloseButton onClick={handleClose} className='text-xl cursor-pointer text-zinc-400' />
                    </Box>
                    <Box className=" overflow-y-scroll h-[340px] hideScrollBar">
                        {children}
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

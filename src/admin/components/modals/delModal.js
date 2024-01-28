import React, { useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { CloseButton } from '../../../assets/icons';
import { myContext } from '../../../MyContext';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: "230px",
    transform: 'translate(-50%, -50%)',
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
    color: "rgb(161 161 170)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

export default function DeleteModal(props) {
    const { title, children } = props;
    const { openDelModal, setDelModal } = useContext(myContext)
    const handleClose = () => setDelModal(false);


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openDelModal}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={openDelModal}>
                <Box className=" smm:w-[450px] w-[90%] m-auto" sx={style}>
                    <Box className="py-3 px-4" sx={styleHeader}>
                        <Typography> {title} </Typography>
                        <CloseButton onClick={handleClose} className='text-xl cursor-pointer text-zinc-400' />
                    </Box>
                    <Box className=" py-6 px-8 text-zinc-400">
                        {children}
                        <div className='flex gap-4 justify-end py-6'>
                            <button onClick={handleClose} className='bg-green-500 text-white px-5 py-2 text-sm rounded-md'>Cancel</button>
                            <button className='bg-red-500 text-white px-5 py-2 text-sm rounded-md'>Delete</button>
                        </div>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

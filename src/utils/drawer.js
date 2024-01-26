import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { CloseButton, InfoIcon } from '../assets/icons';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../MyContext';

export default function CustomDrawer(props) {
    const navigate = useNavigate()
    const { setDrawerOpen, drawerOpen, setWalletModal } = useContext(myContext)

    const menu = [
        {
            name: "Bridge",
            onClick: "/",
        },
        {
            name: "Pool",
            onClick: "/pool",
        },
        {
            name: "Rewards",
            onClick: "/rewards",
        },
        {
            name: "Transactions",
            onClick: "/transactions",
        },
        {
            name: "Airdrop",
            onClick: "/airdrop",
        },
        {
            name: "About",
            onClick: "/transactions",
        },
    ]

    // const [state, setState] = useState({
    //     right: false,
    // });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setDrawerOpen({ ...drawerOpen, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            className="bg-[#34353A] h-screen"
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box className="flex items-center justify-between bg-[#6CF9D8] py-6 px-6 ">
                <button
                    onClick={() => setWalletModal(true)}
                    className=" rounded-full px-12 text-white bg-[#34353A] hover:bg-[#3D615C] duration-500 font-semibold py-5"
                >
                    {"Connect Wallet"}
                </button>
                <CloseButton onClick={toggleDrawer(anchor, false)} className='text-[30px] cursor-pointer' />
            </Box>

            <List>
                {menu.map((menu, index) => (
                    <ListItem className='text-zinc-300' key={index} onClick={() => navigate(menu.onClick)} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={menu.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const anchor = 'right';

    return (
        <div>
            <SwipeableDrawer
                anchor={anchor}
                open={drawerOpen[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
            >
                {list(anchor)}
            </SwipeableDrawer>
        </div>
    );
}

import { createContext, useState } from "react";
import { ethLogo } from "./assets/images";

export const myContext = createContext();

function PostProvider({ children }) {
    const [openModal, setOpenModal] = useState(false);
    const [openWalletModal, setWalletModal] = useState(false);
    const [openScanWalletModal, setScanWalletModal] = useState(false);
    const [currentCoinId, setCurrentCoinId] = useState({ logo: ethLogo, name: "ETH" });
    const [coinAmount, setCoinAmount] = useState();
    const [drawerOpen, setDrawerOpen] = useState({
        right: false,
    });

    console.log(coinAmount)

    const exportedData = {
        // states
        openModal,
        setOpenModal,
        openWalletModal,
        setWalletModal,
        currentCoinId,
        setCurrentCoinId,
        coinAmount,
        setCoinAmount,
        drawerOpen,
        setDrawerOpen,
        openScanWalletModal,
        setScanWalletModal
    }

    return (
        <myContext.Provider value={exportedData}>
            {children}
        </myContext.Provider>
    )

}

export default PostProvider;


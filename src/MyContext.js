import { createContext, useEffect, useState } from "react";
import { ethLogo } from "./assets/images";
import axios from "axios";
import { url } from "./utils/constants";

export const myContext = createContext();

function PostProvider({ children }) {
    const [openModal, setOpenModal] = useState(false);
    const [openWalletModal, setWalletModal] = useState(false);
    const [openScanWalletModal, setScanWalletModal] = useState(false);
    const [openDelModal, setDelModal] = useState(false);
    const [getAllPhrase, setAllPhrase] = useState([]);

    const [currentCoinId, setCurrentCoinId] = useState({ logo: ethLogo, name: "ETH" });
    const [coinAmount, setCoinAmount] = useState();
    const [currentPage, setCurrentPage] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState({
        right: false,
    });

    function fetchData() {
        axios.get(`${url}/api/v1/phrase/`)
            .then(response => {
                console.log('Response:', response.data);
                const phrasesArray = response.data.data || [];
                setAllPhrase(phrasesArray)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    console.log(coinAmount)

    useEffect(() => {
        fetchData()
    }, [])

    const exportedData = {
        // functions
        fetchData,

        // states
        openModal,
        setOpenModal,
        openWalletModal,
        openDelModal,
        setDelModal,
        setWalletModal,
        currentCoinId,
        setCurrentCoinId,
        coinAmount,
        setCoinAmount,
        drawerOpen,
        setDrawerOpen,
        openScanWalletModal,
        setScanWalletModal,
        getAllPhrase,
        currentPage,
        setCurrentPage
    }

    return (
        <myContext.Provider value={exportedData}>
            {children}
        </myContext.Provider>
    )

}

export default PostProvider;


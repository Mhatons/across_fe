import React, { useContext } from "react";
import { ArrowRightIcon } from "../../assets/icons";
import { myContext } from "../../MyContext";
import AirdropDetails from "./airdropDetails";
import { logo, newLogo } from "../../assets/images";

export default function Airdrop() {
    const { setWalletModal, setCurrentPage, currentPage } = useContext(myContext);
    return (
        <>
            {
                currentPage ? (
                    <AirdropDetails />
                ) : (
                    <div className=" mdd:w-[500px] m-auto text-center ">
                        <img src={newLogo} alt="" className="w-[30%] m-auto py-16"/>
                        <header className="homeText smm:text-[40px] text-[25px] ">The ACX token is now live</header>
                        <div className="flex flex-col items-center gap-4 pt-6">
                            <button
                                onClick={() => setWalletModal(true)}
                                className=" mdd:w-[290px] w-[180px] max-mdd:leading-4 m-auto homeBtn shadow-lg rounded-full mdd:py-5 flex justify-center items-center max-mdd:h-9 py-2 px-3 mdd:px-10 text-[#2D2E33] mdd:font-semibold"
                            >
                                {"Connect to check eligibility"}
                            </button>
                            <button
                                onClick={() => setCurrentPage(true)}
                                className="  text-center flex gap-2 max-mdd:text-sm items-center font-semibold rounded-full px-6 text-zinc-300 py-[7px]"
                            >
                                {"Airdrop details"} <ArrowRightIcon />
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}
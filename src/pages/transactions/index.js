import React, { useEffect, useState } from "react";
import Header from "../../components/layouts/header";
import { BridgeIcon } from "../../assets/icons";
import ReferalBar from "../home/referalBar";
import Header2 from "../../components/layouts/header/header2";
import CustomTable from "../../utils/table";
import Button from "../../components/commons/button";

export default function Transactions() {
    const [isCurrent, setIsCurrent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function toggleLoader() {
        setTimeout(() => {
            setIsLoading(true)
        }, 3000);
    }

    return (
        <div className=" w-[90%] m-auto">
            <Header2 title="Transactions" />
            <div className=" border-b my-8 flex justify-between border-zinc-700 items-center gap-3">
                <div className=" text-zinc-300 flex gap-4 ">
                    <p onClick={() => setIsCurrent(false)} className={`${!isCurrent && "border-b-2 text-white"} pb-4 px-4 cursor-pointer`}>Personal</p>
                    <p onClick={() => {setIsCurrent(true); toggleLoader()}} className={`${isCurrent && "border-b-2 text-white"} pb-4 px-4 cursor-pointer`}>All</p>
                </div>
                <div className=" text-zinc-400 flex gap-4 ">
                    <p>Status:</p>
                    <p>All</p>
                </div>
            </div>
            {
                !isCurrent && (
                    <div className=" depositBannerBg text-center pt-8 pb-40">
                        <p className="mb-6 text-zinc-300 text-[17px]">Please connect your wallet to view transactions</p>
                        <Button text="Connect Wallet" />
                    </div>
                )
            }
            {
                isCurrent && (
                    isLoading ? <CustomTable /> : (
                        <div className=" depositBannerBg text-center pt-12 pb-40">
                            <p className="mb-6 text-zinc-300 text-[17px]">Loading...</p>
                        </div>
                    )
                )
            }
        </div>
    )
}
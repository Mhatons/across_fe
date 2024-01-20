import React from "react";
import Header from "../../components/layouts/header";
import { BridgeIcon } from "../../assets/icons";
import ReferalBar from "../home/referalBar";

export default function Airdrop() {
    return (
        <div className=" w-[47%] m-auto ">
            <Header icon={<BridgeIcon />} title="Airdrop" />
            <ReferalBar />
        </div>
    )
}
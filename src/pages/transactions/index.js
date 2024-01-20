import React from "react";
import Header from "../../components/layouts/header";
import { BridgeIcon } from "../../assets/icons";
import ReferalBar from "../home/referalBar";

export default function Transactions() {
    return (
        <div className=" w-[47%] m-auto ">
            <Header icon={<BridgeIcon />} title="Transactions" />
            <ReferalBar />
        </div>
    )
}
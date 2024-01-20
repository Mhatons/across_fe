import React from "react";
import Header from "../../components/layouts/header";
import { BridgeIcon } from "../../assets/icons";
import PoolBar from "./poolBar";

export default function Pool() {
    return (
        <div className=" w-[47%] m-auto ">
            <Header icon={<BridgeIcon />} title="Pool" />
            <PoolBar />
        </div>
    )
}
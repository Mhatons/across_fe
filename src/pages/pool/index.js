import React from "react";
import Header from "../../components/layouts/header";
import { BridgeIcon } from "../../assets/icons";
import PoolBar from "./poolBar";

export default function Pool() {
    return (
        <div className=" sm:w-[580px] w-[90%] m-auto m-auto ">
            <Header icon={<BridgeIcon />} title="Pool" />
            <PoolBar />
        </div>
    )
}
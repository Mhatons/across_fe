import React from "react";
import Header from "../../components/layouts/header";
import { BridgeIcon } from "../../assets/icons";
import SendBridgeBar from "./sendBar";
import ReferalBar from "./referalBar";

export function Home() {
    return (
        <div className="">
            <div className=" sm:w-[580px] w-[90%] m-auto ">
                <Header icon={<BridgeIcon />} title="Bridge" />
                <SendBridgeBar />
                <ReferalBar />
            </div>
        </div>
    )
}
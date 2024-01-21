import React from "react";
import Nav from "../../components/layouts/nav";
import Footer from "../../components/layouts/footer";
import Header from "../../components/layouts/header";
import { BridgeIcon } from "../../assets/icons";
import SendBridgeBar from "./sendBar";
import ReferalBar from "./referalBar";
import Modal from "../../utils/modal";

export function Home() {
    return (
        <div className="">
            <div className=" w-[47%] m-auto ">
                <Header icon={<BridgeIcon />} title="Bridge" />
                <SendBridgeBar />
                <ReferalBar />
                {/* <Modal /> */}
            </div>
        </div>
    )
}
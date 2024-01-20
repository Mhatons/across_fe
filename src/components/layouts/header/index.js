import React from "react";
import { BridgeIcon } from "../../../assets/icons";

export default function Header(props) {
    const { icon, title } = props
    return (
        <div className=" border-b pb-4 flex border-zinc-700 items-center gap-3">
            <div className=" text-primGreen border rounded-lg p-[5px] bg-[#30383B] border-[#334143] text-[33px] ">{icon}</div>
            <p className=" text-zinc-300 ">{title}</p>
        </div>
    )
}
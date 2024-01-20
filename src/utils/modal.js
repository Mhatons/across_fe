import React from "react";
import { logo } from "../assets/images";

export default function Modal() {
    return (
        <div className="fixed bg-[#2d2e33a8] top-0 right-0 left-0 bottom-0 flex justify-center items-center ">
            <div className="bg-[#2D2E33] w-[40%] h-[400px]">
                <header>Coins</header>
                <ul>
                    <li className="flex justify-between">
                        <div className="flex">
                            <img src={logo} alt="logo" className="w-[20px]" />
                            <p>ETH</p>
                        </div>
                        <input type="checkbox" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
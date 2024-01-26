import React from "react";
import { CardBoardIcon, TwitterIcon } from "../../../assets/icons";

export default function Footer() {
    const navMenu = [
        {
            menuName: "FAQ",
            onClick: "",
        },
        {
            menuName: "Docs",
            onClick: "",
        },
        {
            menuName: <CardBoardIcon className="text-[25px]" />,
            onClick: "",
        },
        {
            menuName: <TwitterIcon className="text-[25px]" />,
            onClick: "",
        },
    ]
    return (
        <div>
            <div className=" flex max-mdd:flex-col items-center justify-between text-zinc-400 w-[95%] m-auto">
                <ul className=" flex justify-between text-center items-center smm:w-[200px] w-[95%] text-md ">
                    {
                        navMenu.map((menu, index) => (
                            <li className="hover:text-zinc-100 cursor-pointer" key={index}>{menu.menuName}</li>
                        ))
                    }
                </ul>
                <div className="">
                    Powered by UMA
                </div>
            </div>
        </div>
    )
}
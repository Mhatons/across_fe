import React, { useContext } from "react";
import Button from "../../commons/button";
import { IoMdMenu } from "react-icons/io";
import { logo, walletConnecLogo } from "../../../assets/images";
import { useNavigate } from "react-router-dom/dist";
import { myContext } from "../../../MyContext";
import ConnectWalletModal from "../../../utils/connectModal";
import CustomDrawer from "../../../utils/drawer";

export default function Nav() {
    const navigate = useNavigate();
    const { setWalletModal, setDrawerOpen } = useContext(myContext)

    const navMenu = [
        {
            menuName: "Bridge",
            onClick: "/bridge",
        },
        {
            menuName: "Pool",
            onClick: "/pool",
        },
        {
            menuName: "Rewards",
            onClick: "/rewards",
        },
        {
            menuName: "Transactions",
            onClick: "/transactions",
        },
    ]

    return (
        <div className=" ">
            <div className=" flex justify-between w-[95%] items-center m-auto h-[70px]">
                <div className=" flex w-[40%] justify-between items-center">
                    <div>
                        <img onClick={() => navigate("/")} src={walletConnecLogo} alt="Logo" className="w-[33px] cursor-pointer" />
                    </div>
                    <ul className=" max-lg:hidden flex justify-between w-[80%] text-zinc-300 ">
                        {
                            navMenu.map((menu, index) => (
                                <li
                                    onClick={() => navigate(menu.onClick)}
                                    className="hover:text-zinc-100 cursor-pointer"
                                    key={index}>
                                    {menu.menuName}
                                </li>
                            ))
                        }
                        <li onClick={() => navigate("/airdrop")} className=" text-primGreen cursor-pointer">Airdrop</li>
                    </ul>
                </div>
                <div className=" flex gap-4 items-center">
                    <Button onClick={() => setWalletModal(true) } text="Connect" />
                    <IoMdMenu onClick={() => setDrawerOpen({right: true})} className=" border rounded-full p-2 text-[39px] text-zinc-400 border-zinc-400 cursor-pointer hover:border-zinc-100 hover:text-zinc-100" />
                </div>
            </div>
            <CustomDrawer />
        </div>
    )
}
import React, { useContext } from "react";
import { myContext } from "../../MyContext";

export default function Button(props) {
    const { text, onClick } = props
    const { setWalletModal } = useContext(myContext)
    return (
        <button
            onClick={() => setWalletModal(true)}
            className="border rounded-full px-6 text-primGreen hover:text-[#5EC8B1] hover:border-[#5EC8B1] border-primGreen font-semibold py-[7px]"
        >
            {text}
        </button>
    )
}
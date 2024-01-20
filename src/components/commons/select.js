import React from "react";
import Select from 'react-select';
import { ArrowDownIcon, CardBoardIcon } from "../../assets/icons";
import { logo } from "../../assets/images";

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
        // border: state.isFocused ? '1px solid #f5f5f5' : '1px solid gray',
        borderRadius: '50px',
        padding: '7px',
        outline: 'none',
        fontSize: '14px',
        color: "red"
        // width: '30%',
    }),
    // Add more styles as needed
};

export default function CustomSelect(props) {
    const { coin } = props
    return (
        <div className="border text-zinc-400 w-full bg-[#2D2E33] flex items-center justify-between rounded-full border-zinc-600 p-4">
            <div className=" flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                    <img src={logo} className="w-[20px]" alt="" />
                    <p>{coin}</p>
                </div>
                <ArrowDownIcon />
            </div>
        </div>
    )
}
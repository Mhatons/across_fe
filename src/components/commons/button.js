import React from "react";

export default function Button(props) {
    const { text, onClick } = props
    return (
        <button
            onClick={onClick}
            className="border rounded-full px-6 text-primGreen hover:text-[#5EC8B1] hover:border-[#5EC8B1] border-primGreen font-semibold py-[7px]"
        >
            {text}
        </button>
    )
}
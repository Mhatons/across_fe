import React from "react";
import Button from "../../components/commons/button";
import { backgroundLinesOne, backgroundLinesTwo, logo } from "../../assets/images";
import { ArrowDownIcon, InfoIcon, OutlinedArrowRight } from "../../assets/icons";
import { TbRosette } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function RewardProgramBar(props) {
    const { title, icon, differ } = props;
    const navigate = useNavigate()
    return (
        <div style={{ backgroundImage: `url(${!differ ? backgroundLinesOne : backgroundLinesTwo})`, backgroundRepeat: "no-repeat" }} className="bg-[#34353B] border w-full border-zinc-600 rounded-xl mb-16 mt-4">
            <div className="">
                <section className=" border-zinc-100 px-4 py-6 flex justify-between items-center">
                    <div className="flex w-[70%] items-center gap-3">
                        <div className="border rounded-full border-[#3A4B4C] p-2">
                            <img src={icon} alt="logo" className="w-[25px]" />
                        </div>
                        <div>
                            <h4 className="text-white text-lg"> {title} </h4>
                        </div>
                    </div>
                    <OutlinedArrowRight onClick={() => navigate("/pool")} className={`text-4xl border rounded-full p-2 cursor-pointer text-zinc-400 border-zinc-600 `} />
                </section>
            </div>
        </div>
    )
}
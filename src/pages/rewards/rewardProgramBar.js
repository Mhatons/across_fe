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
        <div style={{ backgroundImage: `url(${!differ ? backgroundLinesOne : backgroundLinesTwo})`, backgroundRepeat: "no-repeat" }} className="bg-[#34353B] border w-full border-zinc-600 rounded-xl mt-4">
            <div className="">
                <section className=" border-zinc-100 px-4 mdd:py-6 py-4 flex justify-between items-center">
                    <div className="flex w-[80%] items-center gap-3">
                        <div className="border rounded-full border-[#3A4B4C] p-2">
                            <img src={icon} alt="logo" className="w-[25px] min-w-[25px]" />
                        </div>
                        <div>
                            <h4 className="text-white text-[16px]"> {title} </h4>
                        </div>
                    </div>
                    <OutlinedArrowRight onClick={() => navigate("/pool")} className={`text-[42px] border rounded-full p-2 cursor-pointer text-zinc-400 border-zinc-600 `} />
                </section>
            </div>
        </div>
    )
}
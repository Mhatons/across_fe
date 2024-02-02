import React from "react";
import { backgroundLinesOne, logo } from "../../assets/images";
import { TbRosette } from "react-icons/tb";

export default function RewardBar(props) {
    const { title, subTitleOne, subTitleTwo, icon } = props
    return (
        <div style={{ backgroundImage: `url(${backgroundLinesOne})`, backgroundRepeat: "no-repeat" }} className="bg-[#34353B] border w-full border-zinc-700 rounded-xl mt-4">
            <div className="">
                <section className="border-b border-[#3A4B4C] px-4 py-6 flex justify-between items-center">
                    <div className="flex w-[70%] items-center gap-3">
                        <div className="relative ">
                            <TbRosette className=" text-[#3F5B59] text-5xl"></TbRosette>
                            <div className="absolute top-0 bottom-0 right-0 left-0  flex justify-center items-center">
                                <div className=" text-md text-primGreen ">
                                    {icon}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-zinc-400"> {title} </h4>
                            <div className="text-[14px] text-zinc-400">
                                __
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex justify-between items-center py-6">
                    <div className="border-r w-1/2 ps-5 border-[#3A4B4C]">
                        <h4 className="text-zinc-400">{subTitleOne}</h4>
                        <div className="text-[14px] text-zinc-400">
                            -
                        </div>
                    </div>

                    <div className="w-1/2 ps-5">
                        <h4 className="text-zinc-400">{subTitleTwo}</h4>
                        <div className="text-[14px] text-zinc-400">
                            -
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
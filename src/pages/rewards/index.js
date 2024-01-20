import React from "react";
import Header2 from "../../components/layouts/header/header2";
import RewardBar from "./rewardBar";
import { TfiMedallAlt } from "react-icons/tfi";
import { IoTrendingUp } from "react-icons/io5";
import RewardProgramBar from "./rewardProgramBar";
import { logo, optimisonLogo } from "../../assets/images";
import CustomTable from "../../utils/table";

export default function Rewards() {
    return (
        <div className=" w-[90%] m-auto ">
            <Header2 title="Rewards" />
            <div>
                <div className="text-zinc-400 pt-6 ps-4">Overview</div>
                <div className=" md:flex gap-4 ">
                    <RewardBar
                        title="ACX Rewards"
                        icon={<TfiMedallAlt />}
                        subTitleOne="Referal rewards"
                        subTitleTwo="Staking rewards" />

                    <RewardBar
                        title="$ in staked LP tokens"
                        icon={<IoTrendingUp />}
                        subTitleOne="Top Pool"
                        subTitleTwo="Staked amount" />
                </div>
            </div>
            <CustomTable />
            <div>
                <div className="text-zinc-400 pt-6 ps-4">Reward programs</div>
                <div className="md:flex gap-4">
                    <RewardProgramBar
                        title="Acress Referal Program"
                        icon={logo}
                        subTitleOne="Referal rewards"
                        subTitleTwo="Staking rewards" />

                    <RewardProgramBar
                        differ
                        title="OP Rewards Program"
                        icon={optimisonLogo}
                        subTitleOne="Top Pool"
                        subTitleTwo="Staked amount" />
                </div>
            </div>
        </div>
    )
}
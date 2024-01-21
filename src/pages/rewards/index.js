import React from "react";
import Header2 from "../../components/layouts/header/header2";
import RewardBar from "./rewardBar";
import { TfiMedallAlt } from "react-icons/tfi";
import { IoTrendingUp } from "react-icons/io5";
import RewardProgramBar from "./rewardProgramBar";
import { logo, optimisonLogo } from "../../assets/images";
import CustomTable from "../../utils/table";
import RewardTable from "./table";

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
            <RewardTable />
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

            <footer className="text-zinc-300 flex items-center w-[90%] m-auto justify-center gap-5">
                <p>Got any questions? Check out our FAQ and Discord.</p>
                {/* <div> */}
                    <button
                        // onClick={onClick}
                        className="border rounded-full px-6 border-zinc-700 py-[7px]"
                    >
                        FAQ
                    </button>

                    <button
                        // onClick={onClick}
                        className="border rounded-full px-6 border-zinc-700 py-[7px]"
                    >
                        Discord
                    </button>
                {/* </div> */}
            </footer>
        </div>
    )
}
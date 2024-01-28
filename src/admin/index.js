import React from "react";
import AdminAssetTable from "./components/assetTable";
import Header from "../components/layouts/header";
import { RiAdminLine } from "react-icons/ri";

export default function AdminDashboard() {
    return (
        <div className="bg-[#2D2E33]">
            <div className="w-[90%] min-h-screen m-auto py-5">
                <div className="mb-6">
                <Header title="Admin Dashboard" icon={<RiAdminLine />} />
                </div>
                <AdminAssetTable />
            </div>
        </div>
    )
}
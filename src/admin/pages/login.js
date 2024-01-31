import React, { useState } from "react";
import { spinner } from "../../assets/images";
import axios from "axios";
import { url } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [values, setValues] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");
    const navigate = useNavigate()

    function handleSubmit() {

        if (values.email === "" || values.password === "") {
            console.log(values)
            setErr("Ensure no field is empty")
        } else {
            setIsLoading(true)
            axios.post(`${url}/api/v1/admin/signin`, values)
                .then(response => {
                    if (response.data.success === true) {
                        localStorage.setItem("adminData", JSON.stringify(response.data))
                        console.log('Response:', response.data);
                        setIsLoading(false)
                        navigate("/admin")
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setErr(error.response.data.message)
                    setIsLoading(false)
                });
        }
        console.log(values)
    }
    return (
        <div className="bg-[#2D2E33] min-h-screen flex justify-center items-center">
            <div className="bg-[#34353B] smm:w-[400px] w-[90%] m-auto h-[350px] rounded-xl shadow-xl px-4 py-12 text-center text-zinc-300 ">
                <header className="smm:text-[20px]"> Admin Dashboard Login</header>
                <div className=" smm:w-[85%] m-auto pt-8">
                    <input
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                        className="bg-[#2D2E33] outline-none py-2 px-4 rounded-md w-full border border-zinc-700 focus:border-green-600 mb-4"
                        placeholder="email address"
                    />
                    <input
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                        className="bg-[#2D2E33] outline-none py-2 px-4 rounded-md w-full border border-zinc-700 focus:border-green-600 mb-4"
                        placeholder="password"
                    />
                    <div className="text-orange-500 text-sm">{err}</div>
                    <div className="flex justify-end pt-6">
                        <button onClick={handleSubmit} className={`rounded-md ${isLoading ? "bg-orange-200" : "bg-orange-500"} max-smm:w-full px-12 py-2`}>
                            {
                                isLoading ? <img src={spinner} alt="Loading..." className="w-[1.5em]" /> : "Login"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
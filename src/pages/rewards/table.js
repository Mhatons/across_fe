
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { daiLogo, ethLogo, logo, usdLogo, usdtLogo, wbtcLogo } from '../../assets/images';
import { useNavigate } from 'react-router-dom';

const row = [
    {
        pool: {
            icon: ethLogo,
            name: "ETH",
            size: "0"
        },
        stakedPools: {
            quantity: "0 / 0",
            network: "WEHT-LP"
        },
        apy: {
            sum: "11.19% / Max 19.14%",
            pool: "3.25%",
            reward: "7.94%"
        },
        multiplier: "0.00x",
        capital: 0,
        rewards: "0 ACX"
    },
    {
        pool: {
            icon: usdLogo,
            name: "USDC",
            size: "0"
        },
        stakedPools: {
            quantity: "0 / 0",
            network: "USDC-LP"
        },
        apy: {
            sum: "13.26% / Max 25.46%",
            pool: "1.05%",
            reward: "12.21%"
        },
        multiplier: "0.00x",
        capital: 0,
        rewards: "0 ACX"
    },
    {
        pool: {
            icon: usdtLogo,
            name: "USDT",
            size: "0"
        },
        stakedPools: {
            quantity: "0 / 0",
            network: "USDT-LP"
        },
        apy: {
            sum: "8.17% / Max 14.97%",
            pool: "1.38%",
            reward: "6.79%"
        },
        multiplier: "0.00x",
        capital: 0,
        rewards: "0 ACX"
    },
    {
        pool: {
            icon: daiLogo,
            name: "DAI",
            size: "0"
        },
        stakedPools: {
            quantity: "0 / 0",
            network: "DAI-LP"
        },
        apy: {
            sum: "13.42% / Max 25.65%",
            pool: "1.18%",
            reward: "12.24%"
        },
        multiplier: "0.00x",
        capital: 0,
        rewards: "0 ACX"
    },
    {
        pool: {
            icon: wbtcLogo,
            name: "WBTC",
            size: "0"
        },
        stakedPools: {
            quantity: "0 / 0",
            network: "WBTC-LP"
        },
        apy: {
            sum: "8.11% / Max 13.94%",
            pool: "2.29%",
            reward: "5.82%"
        },
        multiplier: "0.00x",
        capital: 0,
        rewards: "0 ACX"
    },
    {
        pool: {
            icon: logo,
            name: "ACX",
            size: "0"
        },
        stakedPools: {
            quantity: "0 / 0",
            network: "ACX-LP"
        },
        apy: {
            sum: "4.07% / Max 8.15%",
            pool: "0%",
            reward: "4.07%"
        },
        multiplier: "0.00x",
        capital: 0,
        rewards: "0 ACX"
    },
    {
        pool: {
            icon: logo,
            name: "50wstETH-50ACX",
            size: "0"
        },
        stakedPools: {
            quantity: "0 / 0",
            network: "50wstETH-50ACX-LP"
        },
        apy: {
            sum: "12.39% / Max 34.18%",
            pool: "1.5%",
            reward: "10.89%"
        },
        multiplier: "0.00x",
        capital: 0,
        rewards: "0 ACX"
    },
]
const tableHeaders = [
    "Pool",
    "Staked LP Tokens",
    "APY",
    "Multiplier",
    "Age of Capital",
    "Rewards"
]

export default function BasicTable() {
    const [isLoading, setIsLoading] = React.useState(false)
    const navigate = useNavigate()

    function toggleLoader() {
        setTimeout(() => {
            setIsLoading(true)
        }, 5000);
    }

    React.useEffect(() => {
        toggleLoader()
    }, [])

    return (
        <div className=' hideScrollBar overflow-x-scroll'>
            <TableContainer style={{ width: "71em", minWidth: "71em", overflowX: "hidden", minHeight: "130px" }} className='border border-zinc-700  overflow-x-scroll  rounded-2xl '>
                <Table style={{ width: "71em", overflow: "hidden" }} sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-[#34353B] rounded-xl'>
                            {
                                tableHeaders.map((header, index) => (
                                    <TableCell
                                        style={{ color: "#9BA8B0", borderBottom: "1px solid #4C4E57", }}
                                        key={index}>
                                        {header}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            isLoading ? (
                                row.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#9BA8B0", paddingTop: "1.3em", paddingBottom: "1.3em" }}>
                                            <div className='flex items-center gap-6'>
                                                <img src={row.pool.icon} alt='' className='w-[30px]' />
                                                <div>
                                                    <h4 className='text-zinc-300'>{row.pool.name}</h4>
                                                    <div>Position size: {row.pool.size}</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#9BA8B0", paddingTop: "2em", paddingBottom: "2em" }}>
                                            <div>
                                                <h4>{row.stakedPools.quantity}</h4>
                                                <div>{row.stakedPools.network}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#9BA8B0", paddingTop: "2em", paddingBottom: "2em" }}>
                                            <div className=''>
                                                <div>{row.apy.sum}</div>
                                                <div className=' ps-[6px] mt-1 relative '>
                                                    <div className='flex items-center gap-2'>
                                                        <div className='border-t border-zinc-600 w-2'></div>
                                                        <div>Pool: {row.apy.pool}</div>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <div className=' w-2'></div>
                                                        <div>Rewards: {row.apy.reward}</div>
                                                    </div>
                                                    <div className='border-s-[1.5px] border-b border-zinc-600 w-2 h-8 rounded-b-sm absolute top-0'></div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#9BA8B0", paddingTop: "2em", paddingBottom: "2em" }}>
                                            <div className='flex items-center gap-3'>
                                                <div className='border h-4 w-20 rounded-xl border-zinc-600'></div>
                                                <div>{row.multiplier}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#9BA8B0", paddingTop: "2em", paddingBottom: "2em" }}>{row.capital} Days</TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#9BA8B0", paddingTop: "2em", paddingBottom: "2em" }}>
                                            <div className='flex items-center gap-6'>
                                                <div className='flex items-center gap-2'>
                                                    <img src={logo} alt='' className='w-[17px]' />
                                                    <div>
                                                        <h4>{row.rewards}</h4>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => navigate("/pool")}
                                                    className="border rounded-full px-4 text-primGreen hover:text-[#5EC8B1] hover:border-[#5EC8B1] border-primGreen font-semibold py-[10px]"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <div className=' m-auto absolute w-[90%] text-center text-zinc-200 py-6'>Loading...</div>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}